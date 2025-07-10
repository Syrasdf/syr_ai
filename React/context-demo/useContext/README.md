# useCotext
- 组件层次太深，组件通信机械化
- 上下文对象 **全局**状态共享
- 使用流程
  - 创建一个上下文对象
  - provider 全局声明
  - 在任何地方，useContext 使用状态

## 数据状态共享，肯定不只有一种方式
- 组件单向数据流通信
- 创建上下文对象
  - 在它Provider内部，useContext拿到状态
  - 一般在全局使用
  ThemeContex.provider 组件，react的一贯作风，将组件进行到底