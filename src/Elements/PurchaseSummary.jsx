import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import lilfox from '../assets/Icons/lilfox.png';

export const PurchaseSummary = () => {
  const { cartItems } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: ''
  });

  const [showDialog, setShowDialog] = useState(false);

  const calculateTotalItems = () => {
    return cartItems.length;
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(3);
  };

  const calculateTax = () => {
    const taxPercentage = 0.01; 
    return (calculateTotalPrice() * taxPercentage).toFixed(3);
  };

  const calculateTotalPriceWithTax = () => {
    return (parseFloat(calculateTotalPrice()) + parseFloat(calculateTax())).toFixed(3);
  };

  const isShippingFree = calculateTotalPrice() > 250;

  const handleConfirmPurchase = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    window.location.reload();
  };

  return (
    <div className='summary text-black bg-white font-semibold p-5 max-h-fit inline-block' style={{ width: '100%' }}>
      <div className="summary-text">
        <div className="amount-items mb-2">Artículos Comprados: {calculateTotalItems()}</div>
        <div className="price-items mb-2">Precio Total: ${calculateTotalPrice()}</div>
        <div className="price-tax mb-2">Impuesto: ${calculateTax()}</div>
        <div className="price-tax mb-2">Precio Total + Impuesto: ${calculateTotalPriceWithTax()}</div>
        <div className="price-tax mb-2">Envío Gratis: {isShippingFree ? 'Sí' : 'No'}</div>
      </div>
      <div className="inputs-summary mt-5">
        {/* Input fields... */}
      </div>


      <div className="inputs-summary mt-5">
        <h2 className="h3 text-2xl mb-2 text-UT-orange font-semibold">Datos de Envio</h2>
        
        <label for="Name-user" className="label mb-2 text-sm text-UT-orange font-semibold">Nombre</label>
            <input type="text" id="Name-user" className="text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-white to-orange-500 border-orange-300 border-solid border-2 focus:border-b-orange-400" placeholder="Nombre" required />

            <label for="Tel-user" className="label mb-2 text-sm text-UT-orange font-semibold">Teléfono</label>
            <input type="text" id="Tel-user" className="text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-white to-orange-500 border-orange-300 border-solid border-2 focus:border-b-orange-400" placeholder="+57 000-00-00-00" required />

            <label for="Address-user" className="label mb-2 text-sm text-UT-orange font-semibold">Dirección</label>
            <input type="text" id="Address-user" className="text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-white to-orange-500 border-orange-300 border-solid border-2 focus:border-b-orange-400" placeholder="Dirección" required />

            <label for="City-user" className="label mb-2 text-sm text-UT-orange font-semibold">Ciudad</label>
            <input type="text" id="City-user" className="text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-white to-orange-500 border-orange-300 border-solid border-2 focus:border-b-orange-400" placeholder="Ciudad" required />

            <label for="PostalCode-user" className="label mb-2 text-sm text-UT-orange font-semibold">Código Postal</label>
            <input type="text" id="PostalCode-user" className="text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-white to-orange-500 border-orange-300 border-solid border-2 focus:border-b-orange-400" placeholder="Código Postal" required />

            <label for="Country-user" className="label mb-2 text-sm text-UT-orange font-semibold">País</label>
            <input type="text" id="Country-user" className="text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-white to-orange-500 border-orange-300 border-solid border-2 focus:border-b-orange-400" placeholder="País" required />

            <label for="payMethod-user" className="label mb-2 text-sm text-UT-orange font-semibold">Método de Pago</label>
            <input type="text" id="payMethod-user" className="text-sm rounded-lg block w-full p-2.5 bg-gradient-to-r from-white to-orange-500 border-orange-300 border-solid border-2 focus:border-b-orange-400" placeholder="Método de Pago" required />

      </div>
   
      <button onClick={handleConfirmPurchase} className='btn-eliminate-from-car mt-8 bg-UT-orange hover:bg-Selective-Yellow ml-2 rounded text-white h-7 flex flex-row justify-center' style={{ width: '40%' }}>Confirmar compra</button>

      {showDialog && (
        <div className="modal mt-3 flex flex-col bg-gradient-to-r from-yellow-300 to-orange-500 border-orange-300 rounded">
          <div className="modal-content flex flex-col justify-center align-middle">
            <p className='text-white text-3xl flex justify-center mt-5'>Compra confirmada</p>
            <div className="img w-full flex justify-center">
              <img src={lilfox} alt='Gracias por su compra' className='Img w-40'/>
            </div>
            <button className='mt-8 bg-UT-orange hover:bg-Selective-Yellow w-full rounded text-white' onClick={handleDialogClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};
