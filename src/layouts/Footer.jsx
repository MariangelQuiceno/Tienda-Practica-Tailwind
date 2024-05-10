import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <div>
      <div className='Footer bg-UT-orange max-h-fit p-5'>
        <ul className="text-white text-sm list-none ml-5 w-full">
          <li>Contacto: +57 312 763 2246</li>
          <li>Email: mariangelql1129@gmail.com </li>
          <li>© 2024 Mariángel Quiceno Largo</li>
          <li>Colombia</li>
        </ul>
        <li className='flex justify-end text-white mr-1 ml-1 text-lg'>
          <BsTwitterX className='mr-1 ml-1' />
          <BsInstagram className='mr-1 ml-1' />
          <BsFacebook className='mr-1 ml-1' />
          </li>
      </div>
    </div>
  )
}
