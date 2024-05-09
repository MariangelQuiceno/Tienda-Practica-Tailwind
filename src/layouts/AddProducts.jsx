import React from 'react'
import ad3 from '../assets/ads/ad-3-header.png';

export const AddProducts = () => {
  return (
    <div>
        <div className='Ad-header h-80 bg-UT-orange'>
        <img
          src={ad3}
          alt={`Ad`}
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  )
}
