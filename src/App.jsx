import { useState } from 'react'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom' // Corregir Routes y Router a Route
import { Products } from './Pages/Products'
import { Categories } from './Pages/Categories'
import { Header } from './layouts/Header'


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/categorias' element={<Categories />} />
      </Routes>
    </>
  )
}

export default App
