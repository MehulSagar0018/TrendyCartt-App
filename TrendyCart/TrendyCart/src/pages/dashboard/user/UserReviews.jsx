import React from 'react';
import { useSelector } from 'react-redux';
import { useGetReviewsByUserIdQuery } from '../../../features/reviews/reviewApi';
import { useNavigate } from 'react-router-dom';

const UserReviews = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: reviews, error, isLoading } = useGetReviewsByUserIdQuery(user?._id);
  console.log(reviews);
  const navigate = useNavigate();

  if (isLoading) {
    return <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading reviews...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', color: '#6b7280' }}>No reviews given yet.</p>;
  }

  const handleCardClick = () => {
    navigate('/shop');
  };

  const containerStyle = {
    padding: '24px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '16px',
  };

  const gridStyle = {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  };

  const cardStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px',
    border: '1px solid #E5E7EB',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
  };

  const addReviewStyle = {
    backgroundColor: '#F3F4F6',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    padding: '24px',
    border: '1px solid #E5E7EB',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  };

  const addReviewHoverStyle = {
    backgroundColor: '#3B82F6',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Your Given Reviews</h1>
      <div style={gridStyle}>
        {reviews && reviews.map((review) => (
          <div
            key={review._id}
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Rating: {review.rating}</p>
            <p style={{ marginBottom: '8px' }}><strong>Comment:</strong> {review.comment}</p>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}><strong>Product ID:</strong> {review.productId}</p>
            <p style={{ fontSize: '14px', color: '#6b7280' }}><strong>Created At:</strong> {new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
        <div
          style={addReviewStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, addReviewHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, addReviewStyle)}
          onClick={handleCardClick}
        >
          <span style={{ fontSize: '24px', fontWeight: '700', marginRight: '8px' }}>+</span>
          <p style={{ fontSize: '18px' }}>Add New Review</p>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
