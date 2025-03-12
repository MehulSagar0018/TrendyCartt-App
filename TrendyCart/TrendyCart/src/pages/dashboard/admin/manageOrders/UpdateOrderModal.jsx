import React, { useState } from 'react';
import { useUpdateOrderStatusMutation } from '../../../../features/orders/orderApi';

const UpdateOrderModal = ({ order, onClose, isOpen }) => {
    const [status, setStatus] = useState(order.status);
    const [updateOrderStatus, { isLoading, error }] = useUpdateOrderStatusMutation();

    const handleUpdate = async () => {
        try {
            await updateOrderStatus({ id: order._id, status }).unwrap();
            onClose(); // Close the modal after successful update
        } catch (err) {
            console.error("Failed to update order status:", err);
        }
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
                width: '100%'
            }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Update Order Status</h2>
                
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="status" style={{ display: 'block', color: '#4a4a4a', marginBottom: '8px' }}>Status</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={{
                            border: '1px solid #d1d5db',
                            padding: '8px',
                            borderRadius: '4px',
                            width: '100%'
                        }}
                    >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                
                {error && <p style={{ color: 'red', marginBottom: '16px' }}>Failed to update status.</p>}
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    <button
                        onClick={onClose}
                        style={{
                            backgroundColor: '#d1d5db',
                            color: '#1f2937',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpdate}
                        disabled={isLoading}
                        style={{
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                            opacity: isLoading ? 0.7 : 1
                        }}
                    >
                        {isLoading ? 'Updating...' : 'Update'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrderModal;
