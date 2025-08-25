import { createRoot } from 'react-dom/client'
import Hello from './Hello.jsx'
import './main.css'
import React from 'react'

createRoot(document.getElementById('app')).render(
    <Hello />
)