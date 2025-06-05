# react 业务
friends 数据
APP
挂载点
页面的显示
- 原生 JS
  DOM 编程
  底层 API 不够高效
  聚焦业务
  前端切图崽（html，css + 一点js） 
  -> 前端开发工程师（微博，美团）JS 框架（vue/react）
  -> node 全栈开发  （node + 数据库）
  -> react native  Android + ios APP 客户端
  -> AIGC AI 应用
  -> 全栈工程师 

Web 应用（www.baidu.com）    移动应用（Android,IOS）
Node(server) 服务端（express）   AI 统领一切  JS 全栈工程师




## **项目**的创建
- npm 是什么？ node package manager 
  node 包管理器  安装react package APP开发能力
- npm init vite 初始化一个项目
  初始化项目 init
  vite vue/react 项目模板和**工程**化
- 选择一些配置
  - react
  - js
  项目模板，基于它开始开发
- npm install 安装依赖包
  node_modules 包所在
- npm run dev
  3000 端口启动应用

# 5 W
- What Web APP
- how npm init vite 初始化并vite的项目模板
- 安装依赖
- 启动项目 http 5173   react 技术栈 Web APP
远离 JS API 编程，面向于业务 

## 响应式业务
## TODOS
  - 数据 ['脱单','学习','健身']
    数据在页面上渲染  react 提供点啥 支持这个业务

## react 初体验
- react 组件是完成开发任务的最小单元
- 组件组合html, css, js
- 组件是一个函数
- 返回html
- 函数体里面 return 之前可以声明数据和业务逻辑
- {编写一个js表达式}  不用写DOM表达式

## 响应式数据
- 数据是会发生改变的，数据状态 state
- useState(初始值)  使用一个数据状态，返回一个数组
- 数组第一项是数据本身，第二项是修改数据的方法
