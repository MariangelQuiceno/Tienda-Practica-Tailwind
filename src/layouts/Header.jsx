import React, { useState, useEffect } from 'react';
import ad1 from '../assets/ads/ad-1-header.png';
import ad2 from '../assets/ads/ad-2-header.png';
import ad3 from '../assets/ads/ad-3-header.png';
import { NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

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
        <navbar className='navbar-header border-solid border-white flex'>
        <ul className='list-organizer flex justify-center space-x-52 h-10  '>
        <li><NavLink className='text-white hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded' to={'/'}>Inicio</NavLink></li>
          <li><NavLink className='text-white hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded' to={'/productos'} >Productos</NavLink></li>
          <li><NavLink className='text-white hover:bg-Selective-Yellow hover:opacity-75 font-bold p-3 rounded' to={'/categorias'}>Categorias</NavLink></li>
        </ul>
        <div class="search-bar ml-40 flex flex-row">
        <BsSearch className="text-white text-3xl mr-3" /> 
        <input  type="search" placeholder="Ingrese un Producto" className='searchBar border-2 border-orange-500 rounded focus:border-orange-500 focus:outline-none h-9 p-2' />
        <span class="flex items-center whitespace-nowrap px-3"/>
       </div>
        </navbar>
      </div>
    </div>
  );
};


