import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePostReviewMutation } from '../../../features/reviews/reviewApi';
import { useFetchProductByIdQuery } from '../../../features/products/productsApi';

const PostAReview = ({ isModalOpen, handleClose }) => {
    const { id } = useParams();
    const { user } = useSelector((state) => state.auth);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [postReview] = usePostReviewMutation();

    const { refetch } = useFetchProductByIdQuery(id, {
        skip: !id,
    });

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            comment: comment,
            rating: rating,
            userId: user?._id,
            productId: id
        }
        try {
            const response = await postReview(newComment).unwrap();
            console.log(response);
            alert('Comment posted successfully!');
            setRating(0);
            setComment('');
            refetch();
        } catch (err) {
            alert(err.message);
        }
        handleClose();
    };

    return (
        <div onClick={handleBackdropClick} 
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                display: isModalOpen ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 40,
                padding: '0 8px'
            }}
        >
            <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '24rem',
                zIndex: 50
            }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '16px' }}>Post a Review</h2>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => handleRating(star)}
                            style={{ cursor: 'pointer', color: '#FFD700', fontSize: '1.25rem', marginRight: '4px' }}
                        >
                            {rating >= star ? (
                                <i className="ri-star-fill"></i>
                            ) : (
                                <i className="ri-star-line"></i>
                            )}
                        </span>
                    ))}
                </div>

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows="4"
                    style={{
                        width: '100%',
                        border: '1px solid #D1D5DB',
                        padding: '8px',
                        borderRadius: '4px',
                        marginBottom: '16px'
                    }}
                    placeholder="Write your comment here..."
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    <button
                        onClick={handleClose}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#D1D5DB',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        <i className="ri-close-line"></i> Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        <i className="ri-check-line"></i> Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostAReview;
