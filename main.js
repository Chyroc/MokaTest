#!/usr/bin/env babel-node

import readline from 'readline'
import cp from 'child_process'
import _ from 'lodash'

const splitNumber = (argv) => argv[0] === '-n' ? [_.parseInt(argv[1]), argv.slice(2)] : [5000, argv]
const splitMaxProcs = (argv) => argv[0] === '-P' ? [_.parseInt(argv[1]), argv.slice(2)] : [1, argv]
const splitArgv = () => {
  const argv = process.argv.slice(2)
  const [number, newArgv] = splitNumber(argv)
  const [maxProcs, command] = splitMaxProcs(newArgv)
  return {
    number,
    maxProcs,
    command
  }
}

const splitInput = (input, command, number) => {
  const inputList = _.chunk(input, number)
  return _.map(inputList, value => _.concat(command, value))
}

const main = () => {
  const {number, maxProcs, command} = splitArgv()

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })

  rl.on('line', line => {
    const lineList = _.split(line, ' ')
    const commandList = splitInput(lineList, command, number)
    _.forEach(commandList, value => {
        const result = cp.exec(_.join(value, ' '))
        result.stdout.on('data', data => console.log(data))
        result.stderr.on('data', data => {
          if (data) {
            throw new Error(data)
          }
        })
    })

    rl.close()
  })
}

main()
