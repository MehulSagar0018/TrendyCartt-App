import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AdminStatsChart = ({ stats = {} }) => {
  const {
    totalOrders = 0,
    totalProducts = 0,
    totalReviews = 0,
    totalUsers = 0,
    monthlyEarnings = [],
  } = stats;

  const pieData = {
    labels: ['Total Orders', 'Total Products', 'Total Reviews', 'Total Users'],
    datasets: [
      {
        label: 'Admin Stats',
        data: [totalOrders, totalProducts, totalReviews, totalUsers],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const data = new Array(12).fill(0);
  monthlyEarnings.forEach(entry => {
    if (entry.month >= 1 && entry.month <= 12) {
      data[entry.month - 1] = entry.earnings;
    }
  });

  const lineData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Monthly Earnings',
        data,
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const hasData = monthlyEarnings.length > 0;

  return (
    <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px' }}>Admin Stats Overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        <div style={{ maxHeight: '384px', width: '100%' }}>
          {totalOrders || totalProducts || totalReviews || totalUsers ? (
            <Pie data={pieData} options={options} />
          ) : (
            <p style={{ textAlign: 'center', color: '#6b7280' }}>No data available for the pie chart.</p>
          )}
        </div>

        <div style={{ maxHeight: '384px', width: '100%' }}>
          {hasData ? (
            <Line data={lineData} options={options} />
          ) : (
            <p style={{ textAlign: 'center', color: '#6b7280' }}>No data available for the line chart.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminStatsChart;