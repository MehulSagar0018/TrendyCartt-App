import React, { useState } from 'react';
import { useFetchAllProductsQuery } from '../../features/products/productsApi'; // Import the hook from productsApi
import ProductCard from '../shop page/ProductCard';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: response, isLoading, isError } = useFetchAllProductsQuery({}); // Fetch products from MongoDB
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Extract the products array from the response
    const products = response?.products || [];

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (
        <>
            <section className='section__conteiner bg-primary-light'>
                <h2 className='section__header capitalize'>Search Products</h2>
                <p className='section__subheader'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam
                    cupiditate facere laborum aut repellendus facilis magni quisquam unde reprehenderit.
                    Doloribus ut, nulla architecto atque ducimus dolor doloremque magni quibusdam!
                </p>
            </section>
            <section className='section__container'>
                <div className='w-full mb-12 flex flex-row items-center justify-center gap-4'>
                    <input
                        type='text'
                        placeholder='Search Products....'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-bar w-full max-w-4xl border rounded"
                    />
                    <button
                        className='search-button w-20 h-5 md:w-auto py-2 px-8 bg-primary-dark text-white'
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <ProductCard products={filteredProducts.length > 0 ? filteredProducts : products} />
            </section>
        </>
    );
};

export default Search;