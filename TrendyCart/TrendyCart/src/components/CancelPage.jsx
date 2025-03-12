import React from 'react';
import { useNavigate } from 'react-router-dom';

const CancelPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{fontSize:"28px", fontWeight:"bold"}}>Your order was canceled</h1><br/>
     
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#E53E3E")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#7c42da")}
    
      >
        Continue Shopping
      </button>
      
    </div>
  );
};

export default CancelPage;