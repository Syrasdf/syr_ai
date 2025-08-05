import './App.css'
import HelloComponent from './components/Hellocomponents'
// react + typescript  
// jsvascript 可能会有些问题，主要因为弱类型
// jsx 后缀改为 tsx
// 函数进行类型约束
// const HelloComponent = () => {
//   // void 空 ReactNode 
//   return <div>Hello Component</div>
// }
function App() {
  // 编译阶段 
  // 多了些类型声明文件
  // 多写了一些代码 类型声明 代码质量保驾护航
  let count: number = 10;
  const title: string = "Hello ts";
  const isDone: boolean = true;
  const list: number[] = [1, 2, 3]
  // 元组类型
  const tuple: [string, number] = ["薛之谦", 18];
  // 枚举类型
  enum Status {
    Pending,
    Fullfilled,
    Rejected
  }
  const pStatus: Status = Status.Pending;
  // 对象的约束？
  // 接口
  interface User {
    name: string;
    age: number;
    isSingle?: boolean;
  }
  // 使用 interface 来约定类型
  const user: User = {
    name: "薛之谦",
    age: 18,
    isSingle: false
  }

  return (
    <>
      {count}
      {title}
      {user.name}
      <HelloComponent name="薛之谦"/>
    </>
  )
}

export default App
