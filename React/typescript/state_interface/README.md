# typescript
- js的超集
- 可以按js来写
- 可以添加类型的约定
- js 在 react 业务中的用法，直接抄作业
  - 子组件 + props 的约定
  interface Props {
    name: string;
    age: number;
  }
  : React.FC<Props>
  - 组件 state 
  - 单向数据流
  - props callback
  - 函数的类型约定
  - React 对ts原生支持的非常好
    React.FC
    React.ChangeEvent<HTMLInputElement>