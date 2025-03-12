import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEditProfileMutation } from '../../../features/auth/authApi';
import { setUser } from '../../../features/auth/authSlice';
import avatarImg from "../../../assets/avatar.png";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [editProfile, { isLoading, isError, isSuccess, error }] = useEditProfileMutation();

  const [formData, setFormData] = useState({
    username: '',
    profileImage: '',
    bio: '',
    profession: '',
    userId: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || '',
        profileImage: user.profileImage || '',
        bio: user.bio || '',
        profession: user.profession || '',
        userId: user._id || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      username: formData.username,
      profileImage: formData.profileImage,
      bio: formData.bio,
      profession: formData.profession,
      userId: formData.userId
    };

    try {
      const response = await editProfile(updatedUser).unwrap();
      dispatch(setUser(response.user)); // Update Redux state
      localStorage.setItem('user', JSON.stringify(response.user)); // Update local storage
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Failed to update profile:', err);
      alert('Failed to update profile. Please try again.');
    }

    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '24px' }}>
      <div style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <img
            src={formData.profileImage || avatarImg}
            alt="Profile"
            style={{ width: '128px', height: '128px', objectFit: 'cover', borderRadius: '50%' }}
          />
          <div style={{ marginLeft: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Username: {formData.username || 'N/A'}</h2>
            <p style={{ color: '#4A5568' }}>User Bio: {formData.bio || 'N/A'}</p>
            <p style={{ color: '#4A5568' }}>Profession: {formData.profession || 'N/A'}</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} style={{ marginLeft: 'auto', color: '#3182CE', border: 'none', background: 'none', cursor: 'pointer' }}>
            ✏️
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: '0', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '100%', maxWidth: '400px', position: 'relative' }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '8px', right: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#718096' }}>❌</button>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4A5568' }}>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #CBD5E0', borderRadius: '4px' }} required />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4A5568' }}>Profile Image URL</label>
                <input type="text" name="profileImage" value={formData.profileImage} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #CBD5E0', borderRadius: '4px' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4A5568' }}>Bio</label>
                <textarea name="bio" value={formData.bio} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #CBD5E0', borderRadius: '4px' }} rows="3" />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4A5568' }}>Profession</label>
                <input type="text" name="profession" value={formData.profession} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #CBD5E0', borderRadius: '4px' }} />
              </div>
              <button type="submit" style={{ width: '100%', backgroundColor: '#3182CE', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', opacity: isLoading ? 0.5 : 1 }} disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
              {isError && <p style={{ color: 'red', marginTop: '8px' }}>Failed to update profile. Please try again.</p>}
              {isSuccess && <p style={{ color: 'green', marginTop: '8px' }}>Profile updated successfully!</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
