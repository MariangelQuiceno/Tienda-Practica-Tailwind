import React, { useContext, useState } from 'react'
import { Card } from '../Elements/Card'
import { Main } from '../layouts/Main'
import { DataContext } from '../Context/Context'
import { BsSearch } from "react-icons/bs";





export const Products = () => {
  const products = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='Products'>
      <div className="search-bar ml-40 flex flex-row mt-5">
        <BsSearch className="text-UT-orange text-3xl mr-2 " /> 
        <input  
          type="search" 
          placeholder="Ingrese un Producto" 
          className='searchBar border-2 border-orange-500 rounded focus:border-orange-500 focus:outline-none h-9 p-2' 
          value={searchTerm}
          onChange={handleSearch}
        />
        <span className="flex items-center whitespace-nowrap px-3"/>
      </div>
      <Main>
        {filteredProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </Main>
    </div>
  );
};