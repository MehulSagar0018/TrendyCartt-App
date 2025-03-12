import React from 'react';

const UserStats = ({ stats }) => {
  const cardStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '24px',
    border: '1px solid #E5E7EB',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out, border-color 0.2s ease-in-out',
  };

  const cardHoverStyle = {
    borderColor: '#3B82F6',
    transform: 'scale(1.05)',
  };

  const gridStyle = {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div style={gridStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Total Payments</h2>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>${stats.totalPayments}</p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Total Reviews</h2>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>{stats.totalReviews}</p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Total Purchased Products</h2>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>{stats.totalPurchasedProducts}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
