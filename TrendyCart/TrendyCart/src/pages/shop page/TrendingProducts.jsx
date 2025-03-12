import React, { useState } from 'react';
import { useFetchAllProductsQuery } from '../../features/products/productsApi'; // Import the hook from productsApi
import ProductCard from './ProductCard';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const { data: response, isLoading, isError } = useFetchAllProductsQuery({}); // Fetch products from MongoDB

    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    // Extract the products array from the response
    const products = response?.products || [];

    return (
        <>
            <section className='section__conteiner product__container'>
                <h2 className='section__header'>Trending Product</h2>
                <p className='section__subheader mb-12'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dicta architecto
                    excepturi neque, nostrum consequuntur, alias nihil officia id ab ipsa eius facere
                    veniam rerum qui! Porro voluptate ducimus optio!
                </p>

                <div className="mt-12">
                    <ProductCard products={products.slice(0, visibleProducts)} />
                </div>
                <div className='product__btn'>
                    {visibleProducts < products.length && (
                        <button onClick={loadMoreProducts} className='btn'>Load More</button>
                    )}
                </div>
            </section>
        </>
    );
};

export default TrendingProducts;