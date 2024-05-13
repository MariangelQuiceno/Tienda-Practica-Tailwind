import React, { useContext, useState } from 'react';
import { BsFillStarFill } from "react-icons/bs";
import { TbShoppingCartPlus } from "react-icons/tb";
import { CartContext } from '../Context/CartContext';
import { BsCheckCircle } from "react-icons/bs";

export const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { image, title, price, description, category, rating } = product;
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCartClick = () => {
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className='card-creator bg-white max-h-fit p-5 flex flex-row m-2 rounded' style={{ width: '28rem' }}>
      <div className="img-card flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className='Img w-64 object-contain'/>
      </div>

      <div className="father-text flex flex-col ml-3">
        <div className="title">
          <h2 className='font-bold text-2xl'>{title}</h2>
        </div>
        <div className="price">
          ${price}
        </div>
        <div className="description w-60 h-40">
          <p className='desc-paragraph line-clamp-6 text-sm'>
            {description}
          </p>
        </div>
        <div className="category font-semibold"><p>{category}</p></div>
        <div className="rating flex mt-2">
          <div className="rate font-bold text-lg">{rating.rate}</div> <BsFillStarFill className='Star text-yellow-400 flex place-self-center ml-1' />
          <div className="count ml-2 text-gray-500 text-sm">{rating.count} votos</div>
        </div>
        <button className='btn-add-to-car bg-UT-orange  hover:bg-Selective-Yellow mt-2 ml-2 rounded text-white h-7 flex flex-row justify-center' onClick={handleAddToCartClick}>Añadir a Mi Carrito <TbShoppingCartPlus className='text-white flex self-center ml-1' /></button>
        {showNotification && (
        <div className="notification text-green-500 mt-2 ml-2 rounded flex flex-row justify-center self-center items-center  h-7 "><BsCheckCircle className='text-green-500 mr-2' />Producto agregado al carrito</div>
      )}
      </div>
    </div>
  );
}
