import React, { useState, useEffect } from 'react';
import ad1 from '../assets/ads/ad-1-header.png';
import ad2 from '../assets/ads/ad-2-header.png';
import ad3 from '../assets/ads/ad-3-header.png';

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
    <>
      <div className='Ad-header h-80 bg-UT-orange'>
        <img
          src={currentAd.img}
          alt={`Ad ${currentAd.id}`}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='Header bg-UT-orange h-10'>
        <ul className='list-organizer flex justify-center space-x-40 items-center'>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Categorías</li>
        </ul>
      </div>
    </>
  );
};


