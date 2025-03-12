import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import TextInput from '../addProduct/TextInput';
import UploadImage from '../addProduct/UploadImage';
import SelectInput from '../addProduct/SelectInput';
import { useFetchProductByIdQuery, useUpdateProductMutation } from '../../../../features/products/productsApi';

const categories = [
    { label: 'Select Category', value: '' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Dress', value: 'dress' },
    { label: 'Jewellery', value: 'jewellery' },
    { label: 'Cosmetics', value: 'cosmetics' }
];

const colors = [
    { label: 'Select Color', value: '' },
    { label: 'Black', value: 'black' },
    { label: 'Red', value: 'red' },
    { label: 'Gold', value: 'gold' },
    { label: 'Blue', value: 'blue' },
    { label: 'Silver', value: 'silver' },
    { label: 'Beige', value: 'beige' },
    { label: 'Green', value: 'green' }
];

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const [product, setProduct] = useState({
        name: '',
        category: '',
        color: '',
        price: '',
        description: '',
        image: ''
    });
    const [newImage, setNewImage] = useState(null);

    const { data: productData, isLoading: isProductLoading, error: fetchError, refetch } = useFetchProductByIdQuery(id);
    const { name, category, color, description, image: imageURL, price } = productData?.product || {};

    const [updateProduct, { isLoading: isUpdating, error: updateError }] = useUpdateProductMutation();

    useEffect(() => {
        if (productData) {
            setProduct({
                name: name || '',
                category: category || '',
                color: color || '',
                price: price || '',
                description: description || '',
                image: imageURL || ''
            });
        }
    }, [productData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleImageChange = (image) => {
        setNewImage(image);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedProduct = {
            ...product,
            image: newImage ? newImage : product.image, 
            author: user?._id
        };

        try {
            await updateProduct({ id: id, ...updatedProduct }).unwrap();
            alert('Product updated successfully!');
            await refetch();
            navigate("/dashboard/manage-products");
        } catch (err) {
            console.error('Failed to update product:', err);
        }
    };

    if (isProductLoading) return <p>Loading product...</p>;
    if (fetchError) return <p style={{ color: 'red', marginTop: '1rem' }}>Error fetching product: {fetchError.message}</p>;

    return (
        <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Update Product</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                <TextInput
                    label="Product Name"
                    name="name"
                    placeholder="Ex: Diamond Earrings"
                    value={product.name}
                    onChange={handleChange}
                />

                <SelectInput
                    label="Category"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    options={categories}
                />

                <SelectInput
                    label="Color"
                    name="color"
                    value={product.color}
                    onChange={handleChange}
                    options={colors}
                />

                <TextInput
                    label="Price"
                    name="price"
                    type="number"
                    placeholder="50"
                    value={product.price}
                    onChange={handleChange}
                />

                <UploadImage
                    name="image"
                    id="image"
                    value={newImage || product.image} 
                    setImage={handleImageChange} 
                    placeholder='Upload a product image'
                />

                <div>
                    <label htmlFor="description" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
                        Description
                    </label>
                    <textarea
                        rows={6}
                        name="description"
                        id="description"
                        value={product.description}
                        placeholder='Write a product description'
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isUpdating}
                        style={{
                            backgroundColor: isUpdating ? '#a0aec0' : '#4a90e2',
                            color: '#fff',
                            padding: '0.75rem 1.5rem',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: isUpdating ? 'not-allowed' : 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                    >
                        {isUpdating ? 'Updating...' : 'Update Product'}
                    </button>
                </div>
            </form>

            {updateError && <p style={{ color: 'red', marginTop: '1rem' }}>Error updating product: {updateError.message}</p>}
        </div>
    );
};

export default UpdateProduct;
