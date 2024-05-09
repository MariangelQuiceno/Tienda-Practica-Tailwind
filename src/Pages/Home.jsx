import React from 'react'
import { Main } from '../layouts/Main'
import { Footer } from '../layouts/Footer'
import { Cards } from '../Elements/Cards'





export const Home = () => {
  return (
    <div className='Home min-h-screen'>
        <div className='Home'>
         <Main>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
         </Main>
         <Footer/>
         

        </div>
    </div>
  )
}
