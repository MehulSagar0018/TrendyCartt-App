import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUserStatsQuery } from '../../../../features/stats/statsApi';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import UserStats from './UserStats';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserDMain = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: stats, error, isLoading } = useGetUserStatsQuery(user?.email);

  if (isLoading) {
    return <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading user stats...</p>;
  }

  if (!stats) {
    return <p style={{ textAlign: 'center', color: '#6b7280' }}>No stats available.</p>;
  }

  // Prepare data for the bar chart
  const data = {
    labels: ['Total Payments', 'Total Reviews', 'Total Purchased Products'],
    datasets: [
      {
        label: 'User Stats',
        data: [stats.totalPayments, stats.totalReviews, stats.totalPurchasedProducts],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            if (tooltipItem.label === 'Total Payments') {
              return `Total Payments: $${tooltipItem.raw.toFixed(2)}`;
            }
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ padding: '24px' }}>
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>User Dashboard</h1>
        <p style={{ color: '#6b7280' }}>Hi, {user?.username}! Welcome to your user dashboard.</p>
      </div>
      <UserStats stats={stats} />
      <div style={{ marginBottom: '24px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default UserDMain;