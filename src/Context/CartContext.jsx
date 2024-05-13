import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newItem = { ...item, uniqueId: `${item.id}_${uuidv4()}` };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (uniqueId) => {
    setCartItems(cartItems.filter(item => item.uniqueId !== uniqueId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
