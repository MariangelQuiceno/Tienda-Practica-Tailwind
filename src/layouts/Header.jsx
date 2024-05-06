import React from 'react'
import adHeader from '../assets/ads/ad-1-header.png'

export const Header = ({children}) => {
  return (
    <>
    <div className='Ad-header h-80 bg-UT-orange'>
    <img src={adHeader} alt="Logo" className="w-full h-full object-contain" />
    </div>
    <div className='Header bg-UT-orange h-32'>
      <ul className='list-organizer flex justify-center space-x-20
       items-center '>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Categorias</li>
      </ul>
    </div>
    </>
  )
}
