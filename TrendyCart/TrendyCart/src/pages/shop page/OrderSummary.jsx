import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';
import { loadStripe } from '@stripe/stripe-js';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  
 
  
  const { tax, taxRate, grandTotal, selectedItems, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="bg-primary-light mt-5 text-base">
            <div className="px-6 space-y-5">
                <h2 className="text-2xl font-bold text-text-dark">Order Summary</h2>

                <p>Selected Items: {selectedItems}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Tax ({(taxRate * 100).toFixed(0)}%): ${tax.toFixed(2)}</p>
                <p className="font-bold">Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <div>
            <div style={{ padding: '0 16px 24px' }}>
  <button
    onClick={(e) => {
      e.stopPropagation();
      handleClearCart();
    }}
    style={{
      backgroundColor: '#EF4444',
      padding: '6px 12px',
      color: 'white',
      marginTop: '8px',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <span style={{ marginRight: '8px' }}>Clear Cart</span>
    <i className="ri-delete-bin-7-line"></i>
  </button>
  
</div>

            </div>
        </div>
  )
}

export default OrderSummary
