import React from 'react'
import imgTest from '../assets/imgForTest/test-1.png'

export const Cards = () => {
  return (
    <div className='card-creator bg-white max-h-fit max-w-fit p-5 flex flex-row'>
        <div className="img-card">
            <img
          src={imgTest}
          alt='Product Alt Img'
          className='Img w-64 object-contain'/>
        </div>

        <div className="father-text flex flex-col ml-3">
            <div className="title">
                <h2>Nombre del Producto </h2>
            </div>
            <div className="description">
                <h2>Nombre del Producto </h2>
            </div>
        </div>
        
        
        
    </div>
  )
}
