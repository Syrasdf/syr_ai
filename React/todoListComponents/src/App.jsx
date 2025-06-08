import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 导入 TodoList 组件
import TodoList from './components/TodoList.jsx';//对components/TodoList的引入

function App() {

  return (
    <>
      <div></div>
      <TodoList />
      <TodoList />
    </>
  )
}

export default App
