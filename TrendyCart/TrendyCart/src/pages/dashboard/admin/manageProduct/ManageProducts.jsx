import React, { useState } from 'react';
import { useDeleteProductMutation, useFetchAllProductsQuery } from '../../../../features/products/productsApi';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../utils/dateFormater';

const ManageProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    const { data: { products = [], totalPages = 1, totalProducts = 0 } = {}, error, isLoading, refetch } = useFetchAllProductsQuery({
        category: undefined,
        color: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        page: currentPage,
        limit: productsPerPage
    });

    const [deleteProduct] = useDeleteProductMutation();

    const handleDelete = async (id) => {
        try {
            const response = await deleteProduct(id).unwrap();
            alert(response.message);
        } catch (error) {
            console.error("Failed to delete the product:", error);
        } finally {
            refetch();
        }
    };

    const startProduct = (currentPage - 1) * productsPerPage + 1;
    const endProduct = startProduct + products.length - 1;

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Failed to load products.</div>}
            <section style={{ padding: '1rem', backgroundColor: '#f8fafc' }}>
                <div style={{ width: '100%', marginBottom: '3rem', padding: '1rem', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#fff',
                        width: '100%',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: '0.5rem',
                        padding: '1rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #ddd' }}>
                            <h3 style={{ fontWeight: '600', fontSize: '1rem', color: '#4a5568' }}>All Products</h3>
                            <Link to="/shop">
                                <button style={{
                                    backgroundColor: '#4f46e5',
                                    color: '#fff',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.25rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s'
                                }}>
                                    See all
                                </button>
                            </Link>
                        </div>
                        <h3 style={{ fontSize: '0.875rem', margin: '1rem 0' }}>Showing {startProduct} to {endProduct} of {totalProducts} products</h3>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        {["No.", "Product Name", "Publishing Date", "Edit or Manage", "Delete"].map((header, index) => (
                                            <th key={index} style={{
                                                padding: '0.75rem',
                                                backgroundColor: '#edf2f7',
                                                color: '#718096',
                                                fontSize: '0.75rem',
                                                textTransform: 'uppercase',
                                                textAlign: 'left',
                                                border: '1px solid #e2e8f0'
                                            }}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td style={{ padding: '0.75rem', textAlign: 'left', color: '#4a5568', border: '1px solid #e2e8f0' }}>
                                                {startProduct + index}
                                            </td>
                                            <td style={{ padding: '0.75rem', textAlign: 'left', color: '#4a5568', border: '1px solid #e2e8f0' }}>
                                                <Link to={`/shop/${product?._id}`} style={{ textDecoration: 'none', color: '#3182ce', cursor: 'pointer' }}>
                                                    {product?.name}
                                                </Link>
                                            </td>
                                            <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                                                {formatDate(product?.createdAt)}
                                            </td>
                                            <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                                                <Link to={`/dashboard/update-product/${product?._id}`} style={{ textDecoration: 'none', color: '#3182ce' }}>
                                                    Edit
                                                </Link>
                                            </td>
                                            <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                                                <button onClick={() => handleDelete(product?._id)} style={{
                                                    backgroundColor: '#e53e3e',
                                                    color: '#fff',
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '0.25rem',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Pagination controls */}
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#e2e8f0',
                            color: '#4a5568',
                            borderRadius: '0.25rem',
                            marginRight: '0.5rem',
                            border: 'none',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: currentPage === index + 1 ? '#4f46e5' : '#e2e8f0',
                                color: currentPage === index + 1 ? '#fff' : '#4a5568',
                                borderRadius: '0.25rem',
                                margin: '0 0.25rem',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#e2e8f0',
                            color: '#4a5568',
                            borderRadius: '0.25rem',
                            marginLeft: '0.5rem',
                            border: 'none',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    );
};

export default ManageProducts;
 