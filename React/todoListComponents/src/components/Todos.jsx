function Todos() {
  // 父组件传过来的数据状态？ 传参
  console.log(props,'/////')
  return (
    <ul>
        {
          Todos.map(todo =>(
            <li key={todo.id}></li>
          ))
        }
    </ul>
  )
}

export default Todos;