import React from 'react'
import { NavLink } from 'react-router-dom'

export const CardsInfo = ({title1, img1, title2, img2}) => {
  return (
<div className='father justify-center flex flex-wrap flex-row w-full'>
    <div className='CardInfo max-h-fit p-10 flex flex-wrap justify-start w-3/12  flex-row rounded border-gray-950 bg-cover text-white h-80 m-5'  style={{backgroundImage: `url(${img1})`}}>
        <div className="text-organizer flex flex-col justify-center items-center">
        <h2 className='info text-3xl font-semibold flex justify-center items-center ml-5' >{title1}</h2>
        <NavLink className='text-white bg-UT-orange hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded mt-5 self-start ml-5' to={'/productos'}>Ver Más</NavLink>
      </div>
      </div>

      <div className='CardInfo max-h-fit p-5 flex flex-wrap justify-start w-3/12   flex-row rounded border-gray-950 bg-cover text-white h-80 m-5'  style={{backgroundImage: `url(${img2})`}}>
        <div className="text-organizer flex flex-col justify-center items-center">
        <h2 className='info  text-3xl font-semibold flex justify-center items-center ml-5'>{title2}</h2>
        <NavLink className='text-white bg-UT-orange hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded mt-5 self-start ml-5' to={'/productos'}>Ver Más</NavLink>
      </div>
    </div>
</div>
  )
}
