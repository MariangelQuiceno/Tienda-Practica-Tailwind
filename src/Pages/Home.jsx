import React, { useContext } from 'react'
import { Main } from '../layouts/Main'
import { CardsInfo } from '../Elements/CardsInfo'
import  imgBuy from '../assets/imgResources/imgBuy.jpg'
import imgCupons from '../assets/imgResources/imgCoupon.png'
import imgTravel from '../assets/imgResources/imgTravel.png'
import imgTree from '../assets/imgResources/imgRecycle.png'
import { DataContext } from '../Context/Context'





export const Home = () => {
  const products = useContext(DataContext); // Obtiene los datos de los productos del contexto

  const slicedProducts = products.slice(0, 2);

  return (
    <div className='Home min-h-screen flex flex-col'>
      <div className='Home'>
        <Main>
        <CardsInfo title1={'Compras Online'} img1={imgBuy}
         title2={'%5 de Cashback'} img2={imgCupons}/>
         <CardsInfo title1={'Servicio de Envio'} img1={imgTravel}
         title2={'Productos de Segunda'} img2={imgTree}/>
        </Main>
         
        </div>
    </div>
  )
}
