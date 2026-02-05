import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  // ← your main App component
import './index.css'         // optional global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)