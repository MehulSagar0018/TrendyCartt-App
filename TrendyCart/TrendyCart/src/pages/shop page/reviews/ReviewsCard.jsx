import React, { useState } from 'react';
import CommentorIcon from "../../../assets/avatar.png";
import { formatDate } from '../../../utils/dateFormater';
import PostAReview from './PostAReview';
import RatingStars from '../../../components/RatingStars';

const ReviewsCard = ({ productReviews }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenReviewModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseReviewModal = () => {
        setIsModalOpen(false);
    };

    const reviews = productReviews || [];

    return (
        <div style={{ margin: '24px 0', backgroundColor: 'white', padding: '32px', borderRadius: '8px' }}>
            <div>
                {reviews.length > 0 ? (
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '500' }}>All Comments...</h3>
                        <div>
                            {reviews.map((review, index) => (
                                <div key={index} style={{ marginTop: '16px' }}>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                        <img src={CommentorIcon} alt="User avatar" style={{ height: '56px', width: '56px', borderRadius: '50%' }} />
                                        <div>
                                            <p style={{ fontSize: '18px', fontWeight: '500', textDecoration: 'underline', color: '#3B82F6', textTransform: 'capitalize' }}>
                                                {review?.userId?.username}
                                            </p>
                                            <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
                                                {formatDate(review?.createdAt)}
                                            </p>
                                            <RatingStars rating={review?.rating} />
                                        </div>
                                    </div>

                                    {/* Comment details */}
                                    <div style={{ color: '#4B5563', marginTop: '20px', border: '1px solid #E5E7EB', padding: '32px', borderRadius: '8px' }}>
                                        <p style={{ maxWidth: '80%' }}>{review?.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p style={{ color: '#6B7280' }}>No reviews yet.</p>
                )}
            </div>

            {/* Add comment section */}
            <div style={{ marginTop: '48px' }}>
                <button
                    onClick={handleOpenReviewModal}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#2563EB',
                        color: 'white',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <i className="ri-pencil-line" style={{ marginRight: '8px' }}></i> Add A Comment
                </button>
            </div>

            {/* PostAReview Modal */}
            <PostAReview isModalOpen={isModalOpen} handleClose={handleCloseReviewModal} />
        </div>
    );
};

export default ReviewsCard;
