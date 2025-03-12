import React from 'react'

const AdminStats = ({ stats }) => {
  console.log(stats);
  return (
    <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>Total Earning</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${Math.round(stats.totalEarnings)}</p>
        </div>
        <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>All Orders</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.totalOrders}</p>
        </div>
        <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>All Users</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.totalUsers}</p>
        </div>
        <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>Total Products</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.totalProducts}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
