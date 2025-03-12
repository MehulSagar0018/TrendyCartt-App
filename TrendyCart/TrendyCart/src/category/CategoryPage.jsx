import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchAllProductsQuery } from '../features/products/productsApi'; // Import the hook from productsApi
import ProductCard from '../pages/shop page/ProductCard';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { data: response, isLoading, isError } = useFetchAllProductsQuery({ category: categoryName }); // Fetch products by category from MongoDB

    // Extract the products array from the response
    const filteredProducts = response?.products || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) return <div>Loading products...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (
        <>
            <section className='section__conteiner bg-primary-light'>
                <h2 className='section__header capitalize'>{categoryName}</h2>
                <p className='section__subheader'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam
                    cupiditate facere laborum aut repellendus facilis magni quisquam unde reprehenderit.
                    Doloribus ut, nulla architecto atque ducimus dolor doloremque magni quibusdam!
                </p>
            </section>
            <div>
                <ProductCard products={filteredProducts} />
            </div>
        </>
    );
};

export default CategoryPage;