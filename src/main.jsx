import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './Context/Context.jsx'
import { CartProvider } from './Context/CartContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider><DataProvider><BrowserRouter><App /></BrowserRouter>
  </DataProvider></CartProvider>
)
