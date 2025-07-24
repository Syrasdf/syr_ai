import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import APP from './App.jsx'
import './flexible.js' // 移动端适配
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
