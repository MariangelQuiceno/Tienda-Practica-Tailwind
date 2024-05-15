import React, { useContext, useState } from 'react';
import { Card } from '../Elements/Card';
import { Main } from '../layouts/Main';
import { DataContext } from '../Context/Context';
import { BsSearch } from "react-icons/bs";
import { CartContext } from '../Context/CartContext';


export const Products = () => {
  const products = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter(product => {
    const titleMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    return titleMatch && categoryMatch;
  });


  const categories = ['all', ...new Set(products.map(product => product.category))];

  return (
    <div className='Products'>
      <div className="search-bar ml-40 flex flex-row mt-2">
        <BsSearch className="text-UT-orange text-2xl mr-2 " /> 
        <input  
          type="search" 
          placeholder="Ingrese un Producto" 
          className='searchBar border-2 border-orange-500 rounded focus:border-orange-500 focus:outline-none h-9 p-2' 
          value={searchTerm}
          onChange={handleSearch}
        />
        <span className="flex items-center whitespace-nowrap px-3"/>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className='border-2 border-orange-500 rounded foczus:border-orange-500 focus:outline-none h-9 p-2 ml-2'
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <Main>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No se encontraron productos que coincidan con la búsqueda.</p>
        )}
      </Main>
    </div>
  );
};
