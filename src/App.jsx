import { useState } from 'react'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom' // Corregir Routes y Router a Route
import { Products } from './Pages/Products'
import { Header } from './layouts/Header'
import { Footer } from './layouts/Footer'
import { ShopCar } from './Pages/ShopCar'



function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/carrito' element={<ShopCar />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
