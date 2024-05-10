import React from 'react'
import imgTest  from '../assets/imgForTest/test-1.png'
import { NavLink } from 'react-router-dom'

export const CardsInfo = ({title1, img1, title2, img2}) => {
  return (
    <div className='CardInfo max-h-fit p-10 flex flex-wrap'>
      <div className="cardExample bg-white flex flex-row w-16 p-2 rounded border-gray-950" style={{ width: '24rem', height: '15rem', backgroundImage: `${img1}` }}>
        <img
          src={img1}
          alt={`Ad `}
          className='w-full h-full object-contain '
        />
        <div className="text-organizer flex flex-col justify-center items-center">
        <h2 className='info text-2xl font-semibold flex justify-center items-center ml-5'>{title1}</h2>
        <NavLink className='text-white bg-UT-orange hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded mt-5' to={'/productos'}>Ver Más</NavLink>
        </div>
      </div>

      <div className="cardExample bg-white flex flex-row w-16 p-2 rounded border-gray-950 ml-36" style={{ width: '24rem', height: '15rem' }}>
        <img
          src={imgTest}
          alt={`Ad `}
          className='w-full h-full object-contain '
        />
        <div className="text-organizer flex flex-col justify-center items-center">
        <h2 className='info text-2xl font-semibold flex justify-center items-center ml-5'>Ofertas desde el 50%</h2>
        <NavLink className='text-white bg-UT-orange hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded mt-5' to={'/productos'}>Ver Más</NavLink>
        </div>
      </div>

    </div>
  )
}
