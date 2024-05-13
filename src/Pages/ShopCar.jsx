import React, { useContext } from 'react';
import { CardShopCar } from '../Elements/CardShopCar';
import { PurchaseSummary } from '../Elements/PurchaseSummary'; 
import { CartContext } from '../Context/CartContext';

export const ShopCar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map(item => (
        <CardShopCar
          key={item.uniqueId} // Cambiado key de item.id a item.uniqueId
          img={item.image}
          titulo={item.title}
          precio={item.price}
          desc={item.description}
          uniqueId={item.uniqueId} // Cambiado itemId a uniqueId
        />
      ))}
      <PurchaseSummary />
    </div>
  );
};
