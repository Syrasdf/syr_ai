import { useState, createElement } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'todo1' },
    { id: 2, title: 'todo2' },
    { id: 3, title: 'todo3' },
  ])
  const element = <h1 className='title'>hello world</h1>

  const element2 = createElement('h1', { className: 'title', id: 'tit' }, 'Hello react')
  return (
    <>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
        {
          todos.map(todo => (
            React.createElement('li', { key: todo.id }, todo.title)
          ))
        }
      </ul>
      {element}
      {
        element2
      }
    </>
  )
}
// 关键词冲突
// class 要写成className
// form 要写成htmlFor
export default App
