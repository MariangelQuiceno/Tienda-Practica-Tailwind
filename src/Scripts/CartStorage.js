
// En un archivo separado, por ejemplo, CartStorage.js

export const saveCartItems = (cartItems) => {
    try {
      const serializedCartItems = JSON.stringify(cartItems);
      localStorage.setItem('cartItems', serializedCartItems);
    } catch (error) {
      console.error('Error saving cart items to localStorage:', error);
    }
  };
  
  export const loadCartItems = () => {
    try {
      const serializedCartItems = localStorage.getItem('cartItems');
      if (serializedCartItems === null) {
        return undefined; // Si no hay datos en localStorage, devuelve undefined
      }
      return JSON.parse(serializedCartItems);
    } catch (error) {
      console.error('Error loading cart items from localStorage:', error);
      return undefined; // Maneja errores devolviendo undefined
    }
  };
  