- JSX
  - JSX 不能独立运行
  - vite 环境中
    JSX -> React.createElement
  - React 环境中

- babel 
  Make JavaScript Great Again
  大胆使用JS最新语法，不用等待
  es6 promise -> es8 async await
  let -> var 转译
  () -> {} ->function() {}
  
- 编译的流程
  - pnpm i @babel/cli @babel/core -D 开发依赖
    @babel/cli  bable的命令行工具
    @babel/core babel的核心库 转译
    babel 负责 JS 转码
    -D 开发阶段的依赖 dev 
    上线后是不用的
  - ./node_modules/.bin/babel 
    react -> IOS代码
    es6 -> es5
    JSX -> React.CreateElement
    React.createElement -> React.createElement 转译

JSX
pnpm i -D @babel/preset-react  

更换规则
{
  "presets": [
    "@babel/preset-react"
  ]
}

./node_modules/.bin/babel 1.jsx -o 2.jsx