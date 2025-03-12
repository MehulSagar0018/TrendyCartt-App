import React from "react";
import { useDispatch } from 'react-redux';
import RatingStars from "../../components/RatingStars";
import { Link, useParams } from 'react-router-dom';
import { useFetchProductByIdQuery } from "../../features/products/productsApi";
import { addToCart } from "../../features/cart/cartSlice";
import ReviewsCard from '../shop page/reviews/ReviewsCard';


const SingleProduct = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } =  useFetchProductByIdQuery(id);
  const singleProduct = data?.product || {};
  const productReviews = data?.reviews || [];
  const handleAddToCart = (product) => {
    console.log(product)
    dispatch(addToCart(product));
    
};
if (isLoading) return <p>Loading product details...</p>;
if (error) return <p>Error loading product details.</p>;



  return (
    <>
    <section className="section__container rounded bg-primary-light">
        <h2 className="section__header">Single Product Page</h2>
        <div className="section__subheader space-x-2">
            <span className='hover:text-primary'><Link to="/">home</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-primary'>{singleProduct.name}</span>
        </div>
    </section>

    <section style={{ marginTop: "4rem", marginBottom: "0.5rem", paddingLeft: "7rem"  }}>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"  ,
      gap: "2rem",
    }}
  >
    {/* Product Image */}
    <div style={{ width: "60%", maxWidth: "40%" }}>
      <img
        src={singleProduct.image}
        alt={singleProduct.name}
        style={{ borderRadius: "8px", width: "100%", height: "auto" }}
      />
    </div>

    {/* Product Details */}
    <div style={{ width: "100%", maxWidth: "50%" }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
        {singleProduct.name}
      </h3>
      <p style={{ fontSize: "1.25rem", color: "#F04968", marginBottom: "1rem" }}>
        ${singleProduct.price}{" "}
        {singleProduct.oldPrice && <s style={{ fontSize: "1rem",color: "gray"}}>${singleProduct.oldPrice}</s>}
      </p>
      <p style={{ color: "#4a4a4a", marginBottom: "1rem" }}>
        {singleProduct.description}
      </p>

      {/* Additional Product Information */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p>
          <strong>Category:</strong> {singleProduct.category}
        </p>
        <p>
          <strong>Color:</strong> {singleProduct.color}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <strong>Rating:</strong>
          <RatingStars rating={singleProduct.rating} />
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart(singleProduct);
        }}
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Add to Cart
      </button>
    </div>
  </div>
</section>
  {/* Display Reviews */}
  <section className="section__container mt-8">
                <ReviewsCard productReviews={productReviews}/>
            </section>
    
</>
  );
};

export default SingleProduct;