import React, { useContext } from 'react';
import { CardShopCar } from '../Elements/CardShopCar';
import { PurchaseSummary } from '../Elements/PurchaseSummary'; 
import { CartContext } from '../Context/CartContext';


export const ShopCar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='w-full flex flex-col'>
      {cartItems.map(item => (
        <CardShopCar
          key={item.uniqueId} 
          img={item.image}
          titulo={item.title}
          precio={item.price}
          desc={item.description}
          uniqueId={item.uniqueId} 
        />
      ))}
      <PurchaseSummary />
    </div>
  );
};

