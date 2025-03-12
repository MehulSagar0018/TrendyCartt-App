

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import RatingStars from '../../components/RatingStars';
import { TiShoppingCart } from 'react-icons/ti';

const ProductCard = ({products = {}}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
}

  return (
    <div className="product__grid lg:grid-cols-4 gap-8" role="list">
      {products.map((product,index) => (
        <article key={index} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image || '/default-product.png'}
                alt={product.name || 'Product Image'}
                style={{ height: '150px' }}
                className="md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              aria-label={`Add ${product.name} to cart`}
              className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary-dark"
            >
              <TiShoppingCart />
            </button>
          </div>
          <div className="product__card__content">
            <h3 className="truncate">{product.name}</h3>
            <p>
              ${product.price}{' '}
              {product?.oldPrice ? <s>${product.oldPrice}</s> : null}
            </p>
            <RatingStars rating={product.rating} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductCard;
