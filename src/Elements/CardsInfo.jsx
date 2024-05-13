import React from 'react'
import imgTest  from '../assets/imgForTest/test-1.png'
import { NavLink } from 'react-router-dom'

export const CardsInfo = ({title1, img1, title2, img2}) => {
  return (
  <>
    <div className='CardInfo max-h-fit p-10 flex flex-wrap w-full justify-start'>

       <div className="cardExample flex flex-row w-16 p-2 rounded border-gray-950 bg-cover text-white" style={{ width: '24rem', height: '15rem', backgroundImage: `url(${img1})`}}>
        <div className="text-organizer flex flex-col justify-center items-center">
        <h2 className='info text-3xl font-semibold flex justify-center items-center ml-5' >{title1}</h2>
        <NavLink className='text-white bg-UT-orange hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded mt-5 self-start ml-5' to={'/productos'}>Ver Más</NavLink>
        </div>
      </div>
      </div>

    <div className='CardInfo max-h-fit p-10 flex flex-wrap w-full justify-end'>
      <div className="cardExample flex flex-row  p-2 rounded border-gray-950 bg-cover ml-36 text-white w-full justify-start" style={{ width: '24rem', height: '15rem', backgroundImage: `url(${img2})`}}>
        <div className="text-organizer flex flex-col justify-center items-center">
        <h2 className='info  text-3xl font-semibold flex justify-center items-center ml-5'>{title2}</h2>
        <NavLink className='text-white bg-UT-orange hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded mt-5 self-start ml-5' to={'/productos'}>Ver Más</NavLink>
        </div>
      </div>
    </div>

</>
  )
}
