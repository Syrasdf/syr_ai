import { 
  useState // 私有状态
 } from 'react'

const TodoForm = ({ onAddTodo}) => {
  // 数据
  // props 参数数据
  // state 私有的数据
  // 单项数据流
  const [text, setTitle] = useState('')
  // JSX 一定要有唯一的最外层元素 树来编译解析 JSX 
  const handleSubmit = (e) => {
    e.preventDefault()
    let result = text.trim();
    if(!result)return;
    onAddTodo(result);
    setText(''); // 对数据状态和界面状态一致要敏感
  }

  return (
    <>
    <h1 className="header">TodoList</h1>
    <form className="todo-input" onSubmit={handleSubmit}>
      <input type="text" 
      value={text} 
      onChange={e => setTitle(e.target.value)}
      placeholder="Todo text"
      required
       />
       <button type="submit">添加</button>
    </form>
    </>
  )
}

export default TodoForm
