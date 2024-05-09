import React from 'react'
import imgTest from '../assets/imgForTest/test-1.png'
import { BsFillStarFill } from "react-icons/bs";

export const Cards = () => {
  return (
    <div className='card-creator bg-white max-h-fit p-5 flex flex-row m-2' style={{ width: '28rem' }}>
        <div className="img-card flex justify-center items-center">
            <img
          src={imgTest}
          alt='Product Alt Img'
          className='Img w-64 object-contain'/>
        </div>

        <div className="father-text flex flex-col ml-3">
            <div className="title">
                <h2 className='font-bold text-2xl'>Nombre del Producto </h2>
            </div>
            <div className="price">
              ${109.90}
            </div>
            <div className="description w-60 h-40">
                <p className='desc-paragraph line-clamp-6 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed enim in urna posuere malesuada. Nam mi sapien, posuere at laoreet tristique, ullamcorper ac justo. Etiam quis ex at erat fringilla mollis. Nulla fringilla lacus at maximus aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vel metus eget diam porta ornare. Etiam vehicula elit at erat mattis, eleifend dignissim erat facilisis. Nullam eu ipsum arcu.
                Curabitur turpis erat, volutpat eget ultricies sed, accumsan non neque. Sed cursus vel elit ut consectetur. Quisque ut nulla euismod, placerat libero non, ultricies arcu. Nulla ornare scelerisque enim quis volutpat. Nam non lacus non ligula rutrum rutrum. Suspendisse quam lorem, tincidunt sed suscipit id, lobortis eget dui. Phasellus feugiat blandit odio et aliquet. 
                </p>
            </div>
            <div className="rating flex mt-2">
              <div className="rate font-bold text-lg">3.9 </div> <BsFillStarFill className='Star text-yellow-400 flex place-self-center ml-1' />
              <div className="count ml-2 text-gray-500 text-sm">120 votos</div>
            </div>
            <button className='btn-add-to-car bg-UT-orange  hover:bg-Selective-Yellow mt-2 ml-2 rounded text-white h-7  '>Agregar al Carro</button>
        </div>
    </div>
  )
}
