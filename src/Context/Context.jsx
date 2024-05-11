import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
const DataContext = createContext();

// Creamos el componente proveedor del contexto
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
