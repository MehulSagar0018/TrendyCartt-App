import React from 'react';
import { useLogoutUserMutation } from '../../features/auth/authApi';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/dashboard/orders', label: 'Orders' },
  { path: '/dashboard/payments', label: 'Payments' },
  { path: '/dashboard/profile', label: 'Profile' },
  { path: '/dashboard/reviews', label: 'Reviews' },
];

const UserDashboard = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      console.log('User logged out successfully');
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh', backgroundColor: 'white', padding: '32px' }}>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ fontSize: '20px', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>
            TrendyCart<span role="img" aria-label="cart">🛒</span>
          </Link>
          <p style={{ fontSize: '12px', fontStyle: 'italic' }}>User dashboard</p>
        </div>
        <hr style={{ margin: '20px 0' }} />
        <ul style={{ paddingTop: '20px', listStyle: 'none', paddingLeft: '0' }}>
          {navItems.map((item) => (
            <li key={item.path} style={{ marginBottom: '20px' }}>
              <NavLink
                to={item.path}
                end
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <hr style={{ marginBottom: '15px' }} />
        <button 
          onClick={handleLogout}
          style={{ backgroundColor: 'red', color: 'white', fontWeight: '500', padding: '8px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
