import React, { useState } from 'react';
import UpdateOrderModal from './UpdateOrderModal';
import { Link } from 'react-router-dom';
import { useDeleteOrderMutation, useGetAllOrdersQuery } from '../../../../features/orders/orderApi';
import { formatDate } from '../../../../utils/dateFormater';

const ManageOrders = () => {
    const { data: orders, error, isLoading, refetch } = useGetAllOrdersQuery();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteOrder] = useDeleteOrderMutation();

    const orderList = Array.isArray(orders) ? orders : [];

    const handleEditClick = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    const handleDeleteClick = async (orderId) => {
        if (!orderId) {
            console.error("Order ID is missing");
            return;
        }
        try {
            await deleteOrder(orderId).unwrap();
            refetch();
        } catch (err) {
            console.error("Failed to delete order:", err);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div style={{ padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Manage Orders</h2>
            
            {/* Orders Table */}
            <table style={{ width: '100%', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
                <thead style={{ backgroundColor: '#f7fafc' }}>
                    <tr>
                        <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>Order ID</th>
                        <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>Customer</th>
                        <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>Status</th>
                        <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>Date</th>
                        <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList.map((order, index) => (
                        <tr key={index}>
                            <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                                {order?.orderId || 'N/A'}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                                {order?.email || 'N/A'}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    fontSize: '0.75rem',
                                    color: '#fff',
                                    borderRadius: '9999px',
                                    backgroundColor: getStatusColor(order?.status)
                                }}>
                                    {order?.status || 'N/A'}
                                </span>
                            </td>
                            <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                                {formatDate(order?.updatedAt) || 'N/A'}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Link
                                    to="#"
                                    style={{
                                        color: '#3182ce',
                                        textDecoration: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    View
                                </Link>
                                <button
                                    onClick={() => handleEditClick(order)}
                                    style={{
                                        color: '#48bb78',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        background: 'none',
                                        border: 'none'
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(order?._id)}
                                    style={{
                                        color: '#e53e3e',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        background: 'none',
                                        border: 'none'
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Update Order Modal */}
            {selectedOrder && (
                <UpdateOrderModal
                    order={selectedOrder}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

// Helper function to determine the color based on status
const getStatusColor = (status) => {
    switch (status) {
        case 'pending':
            return '#ecc94b'; // yellow-500
        case 'processing':
            return '#3b82f6'; // blue-500
        case 'shipped':
            return '#10b981'; // green-500
        case 'completed':
            return '#6b7280'; // gray-500
        default:
            return '#e2e8f0'; // gray-300
    }
};

export default ManageOrders;
