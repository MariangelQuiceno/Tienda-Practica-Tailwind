import React, { useContext } from 'react';
import { TbShoppingCartMinus } from "react-icons/tb";
import { CartContext } from '../Context/CartContext';

export const CardShopCar = ({ img, titulo, precio, desc, uniqueId }) => { // Cambiado itemId a uniqueId
  const { removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart(uniqueId); 
  };

  return (
    <>
      <div className='card-car mb-5 bg-white overflow-hidden relative flex flex-row border-UT-orange border-2 border-opacity-60 p-5' style={{ width: '100%', height: '12rem', display: 'flex', justifyContent: 'flex-start' }}>
        <img
          src={img}
          alt={titulo}
          className='Img object-contain mr-2' style={{ width: '30%' }} />
        <div className="text-info-car justify-start ml-5 inline-block text-sm" style={{ width: '60%', height: '40%' }}>
          <h2 className='Title text-UT-orange font-semibold'>{titulo}</h2>
          <div className="price">
            <p>${precio}</p>
          </div>
          <p className='desc-car line-clamp-2'>{desc}</p>
          <button className='btn-eliminate-from-car mt-8 bg-UT-orange  hover:bg-Selective-Yellow  ml-2 rounded text-white h-7 flex flex-row justify-center font-semibold' style={{ width: '40%' }} onClick={handleRemoveFromCart}>Ya no lo quiero...<TbShoppingCartMinus className='text-white flex self-center ml-1' /></button>
        </div>
      </div>
    </>
  );
};
