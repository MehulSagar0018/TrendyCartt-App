import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity , removeFromCart } from '../../features/cart/cartSlice';
import OrderSummary from '../shop page/OrderSummary';
import { json } from 'body-parser';

const CartModal = ({products, isOpen, onClose }) => {
 
  const dispatch = useDispatch();
   const navigate = useNavigate(true);
  const cartProducts = useSelector((state) => state.cart.products);
console.log(CartModal)
  const handleIncrement = (index) => {
    const productId = cartProducts[index]._id;
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (index) => {
    const productId = cartProducts[index]._id;
    dispatch(decrementQuantity(productId));
  };
  const handleRemove = (index) => {
    const productId = cartProducts[index]._id;
    dispatch(removeFromCart(productId));
};
   
const checkout = () => {
  fetch("http://localhost:5000/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      items: cartProducts.map((product) => ({
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: product.quantity,
      })),
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url; // Redirect to the Stripe checkout page
    })
    .catch((error) => console.error("Error:", error));
};
  return (
    <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transition: "opacity 300ms" ,width:"60%"}}>
      <div className={`fixed right-0 top-0  p-3 md:w-1/3  bg-white h-full overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
       style={{transition:"transform 300ms cubic-bezier(0.25,0.46,0.45,0.94)",width:"40%"}}>
        
        <div className='p-4 mt-4'>
          <div className='flex justify-between items-center mb-4'>
            <h4 className='text-2xl font-semibold'>Your Cart </h4>
            <button onClick={onClose} className='border-none p-1 text-gray-600 bg-white font-bold hover:text-white hover:bg-black '>< RiCloseLargeFill/></button>
  </div>
       
        {
           products.length === 0 ? ( <div className='flex justify-around items-center text-2xl m-20 '> Your cart is empty</div>) :
       (
        cartProducts.map((product, index) => (
          <div key={product._id}  className='flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4'>
        <div  className='flex items-center'>
              <span className='mr-4 px-1 bg-primary text-white rounded-full'>0{index+1}</span>
            <img src={product.image} alt="" className='size-12 object-cover mr-4' />
            <div>
            <h5>{product.name}</h5>
            <p className='text-gray-600 text-sm'>${Number(product.price).toFixed(2)}</p>
         
            </div>
            <div className='flex flex-row md:justify-start justify-end items-center mt-2'>
            <button className='size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-4' onClick={() => handleIncrement(index)}>+</button>
            <span className='px-2 text-center mx-1'> {product.quantity}</span>
            <button   className='size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ' onClick={() => handleDecrement(index)}>-</button>
           
           
                <button
                    onClick={() => handleRemove(index)}
                  className="font-semibold rounded-md border-none p-1 bg-transparent text-red-500 hover:text-white hover:bg-red-500 ml-5 mr-4">Remove</button>
            
            </div>          
          </div>
        </div>
        ))
       )}
      </div>
   <OrderSummary />
   <div className='flex justify-end p-3'>         {cartProducts.length > 0 ? (
    <button
      onClick={ () =>checkout()}
      className="font-semibold rounded-md border-none p-1 bg-primary text-white ml-5 mr-4"
    >
      Check Out
    </button>
  ) : (
    <p className="text-gray-500" style={{paddingRight:"30px"}}><span style={{color:"red"}}>* </span>Add items to your cart to proceed to checkout.</p>
  )}</div>
  
    </div>
  
  </div>
  );
};

export default CartModal;