import React from 'react';
import AdminStats from './AdminStats';
import { useSelector } from 'react-redux';
import { useGetAdminStatsQuery } from '../../../../features/stats/statsApi';
import AdminStatsChart from './AdminStatsChart';

const AdminDMain = () => {
    const { user } = useSelector((state) => state.auth);
    const { data: stats, error, isLoading } = useGetAdminStatsQuery();
    console.log(stats);

    if (isLoading) {
        return <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading admin stats...</p>;
    }

    if (!stats) {
        return <p style={{ textAlign: 'center', color: '#6b7280' }}>No stats available.</p>;
    }

    return (
        <div style={{ padding: '24px' }}>
            <div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>Admin Dashboard</h1>
                <p style={{ color: '#6b7280' }}>Hi, {user?.username}! Welcome to the admin dashboard.</p>
            </div>
            <AdminStats stats={stats} />
            <AdminStatsChart stats={stats} />
        </div>
    );
};

export default AdminDMain;
