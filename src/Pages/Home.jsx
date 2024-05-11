import React, { useContext } from 'react'
import { Main } from '../layouts/Main'
import { Card } from '../Elements/Card'
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
          {slicedProducts.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </Main>
         <CardsInfo title1={'online purchases'} img1={imgBuy}
         title2={'%5 of Cashback'} img2={imgCupons}/>
         <CardsInfo title1={'Shipping service'} img1={imgTravel}
         title2={'Second Hand Products'} img2={imgTree}/>
        </div>
    </div>
  )
}
