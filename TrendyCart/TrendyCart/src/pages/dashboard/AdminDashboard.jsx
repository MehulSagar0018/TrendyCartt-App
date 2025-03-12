import React from 'react';
import { useLogoutUserMutation } from '../../features/auth/authApi';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const AdminDashboard = () => {
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout());
        } catch (err) {
            console.error("Failed to logout:", err);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white', padding: '32px', height: '100vh' }}>
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>
                        TrendyCart<span role="img" aria-label="cart">🛒</span>
                    </Link>
                    <p style={{ fontSize: '12px', fontStyle: 'italic' }}>Admin dashboard</p>
                </div>
                <hr style={{ marginTop: '16px' }} />
                <ul style={{ paddingTop: '16px', listStyle: 'none', paddingLeft: 0 }}>
                    {[
                        { to: "/dashboard/admin", label: "Dashboard" },
                        { to: "/dashboard/add-new-post", label: "Add New Post" },
                        { to: "/dashboard/manage-products", label: "Manage Products" },
                        { to: "/dashboard/users", label: "Users" },
                        { to: "/dashboard/manage-orders", label: "Manage Orders" }
                    ].map(({ to, label }) => (
                        <li key={to} style={{ marginBottom: '12px' }}>
                            <NavLink
                                to={to}
                                style={({ isActive }) => ({
                                    color: isActive ? '#1E40AF' : 'black',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    textDecoration: 'none'
                                })}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <hr style={{ marginBottom: '12px' }} />
                <button
                    onClick={handleLogout}
                    style={{ backgroundColor: '#DC2626', color: 'white', fontWeight: '500', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;
