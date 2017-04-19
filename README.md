# MokaTest
MokaTest

## use
```
npm install
npm link
```

## test
`echo {0..8} | xxargs -n 2 echo`
> 将0 1 2 3 4 5 6 7 8以2为步长分割，并输出

> 结果
```
0 1
2 3
4 5
6 7
8
```

`ls *.js | xxargs wc -l`
> 计算当前目录下`.js`文件各自的行数

> 结果
```
53 main.js
```

`cat package.json | grep 'github' | xxargs echo`
> 将`package.json`中含有`github`的行输出

> 结果
```
url: git+https://github.com/Chyroc/MokaTest.git
url: https://github.com/Chyroc/MokaTest/issues
homepage: https://github.com/Chyroc/MokaTest#readme,
```

## 所花时间
昨天（04.18）10点看了一下`xargs`
今天中午来公司用电脑，一直在重装mac的软件，然后和同事讨论工作简历和日后的问题，大概7点开始搞。
总时间大概4个多小时。

## 问题和bug
- 那个每有数据从stdin读入就尝试执行没有做
- `-P`没有做
- 因为题目中写道尽量不要使用package，刚开始没有用lodash和一些别的库，不太习惯（本身是写python，后来写node，并没有太深的node基础知识，这是我的缺点，有待提高），耽误了一点时间。
- 异常处理，并没有考虑所有情况，以实现功能为先了，比如-n的参数不是整数。
- 所有修改，作为一次commit提交。
