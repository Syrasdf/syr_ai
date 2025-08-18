import { useState } from 'react'
import './App.css'
import LifecycleDemo from './components/LifecycleDemo'
import { useToggle, useRequest } from 'ahooks'

function getUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('胆小的me')
    }, 5000)
  })
}

function App() {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const { data, loading, error } = useRequest(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data')
      }, 1000)
    })
  })

  // 处理加载和错误状态
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>Username: {data}</div>
      <p>Effects：{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
      <LifecycleDemo />
    </>
  )
}

export default App