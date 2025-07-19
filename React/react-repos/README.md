# react repos 项目开发
- api.github.io/users/shunwuyu/repos
- 综合react开发全家桶、项目级别、大型的、性能
组件 路由 数据管理


## 路由设计
  - react-router-demo    
  - /repos/:useName
  - /repos/:id
  懒加载
  hash/history
  （路由守卫）
  useParams ：username
## 数据管理
  APP 数据管理
  repos
  useContext + useReducer + hooks
  createContext + Reducer + useRepos

## react 
  组件的粒度

## api
  fetch (小项目)
  - axios http请求库  npm install axios
  - 独立的模块，所有的请求

## 项目的目录结构，项目架构
  - api
    应用中的所有的接口
  - main.jsx
    入口文件
    添加路由，SPA
    添加全局应用状态管理