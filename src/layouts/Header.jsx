import React, { useState, useEffect } from 'react';
import ad1 from '../assets/ads/ad-1-header.png';
import ad2 from '../assets/ads/ad-2-header.png';
import ad3 from '../assets/ads/ad-3-header.png';
import { TbShoppingCart } from "react-icons/tb";
import { NavLink } from 'react-router-dom';


const adsHeader = [
  { id: 1, img: ad1 },
  { id: 2, img: ad2 },
  { id: 3, img: ad3 },
];

export const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adsHeader.length);
  };

  useEffect(() => {
    const id = setInterval(changeImage, 3000); 
    setIntervalId(id);

    return () => {
      clearInterval(id); 
    };
  }, []); 

  const currentAd = adsHeader[currentIndex];

  return (
    <div className='Father'>
      <div className='Ad-header h-80 bg-UT-orange'>
        <img
          src={currentAd.img}
          alt={`Ad ${currentAd.id}`}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='Header bg-UT-orange h-12 flex justify-center items-center'>
        <ul className='list-organizer flex justify-center space-x-2  h-10  '>
        <li><NavLink className='text-white hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded text-xl' to={'/'}>Inicio</NavLink></li>
          <li><NavLink className='text-white hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded text-xl' to={'/productos'} >Productos</NavLink></li>
          <li><NavLink className='text-white hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded text-xl' to={'/carrito'}>Mi Carrito</NavLink></li>
        </ul>
      
      </div>
    </div>
  );
};


