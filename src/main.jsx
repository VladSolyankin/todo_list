import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {todos} from '../data/data.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App todos={todos}/>
  </React.StrictMode>,
)
