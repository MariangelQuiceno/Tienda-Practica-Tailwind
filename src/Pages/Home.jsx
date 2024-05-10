import React from 'react'
import { Main } from '../layouts/Main'
import { Footer } from '../layouts/Footer'
import { Cards } from '../Elements/Cards'
import { CardsInfo } from '../Elements/CardsInfo'
import  imgBuy from '../assets/imgResources/imgBuy.jpg'







export const Home = () => {
  return (
    <div className='Home min-h-screen flex flex-col'>
        <div className='Home'>
         <Main>
          <Cards></Cards>
          <Cards></Cards>
         </Main>
         <CardsInfo title1={'Prueba 1'} img1={imgBuy}/>
         
        </div>
    </div>
  )
}
