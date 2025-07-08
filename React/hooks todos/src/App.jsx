import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <>
     {/* 开发的的任务单位是组件 */}
     {/* <div style={{width:'3.5714rem',height:'3.5714rem',background: 'red'}}></div>  */}
     {/* 单位换算*/}
     <Todos />
    </>
  )
}

export default App
