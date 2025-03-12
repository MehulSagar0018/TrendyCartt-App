import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddProductMutation } from '../../../../features/products/productsApi';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import UploadImage from './UploadImage';
import { useNavigate } from 'react-router-dom';

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

const AddProduct = () => {
    const { user } = useSelector((state) => state.auth);

    const [product, setProduct] = useState({
        name: '',
        category: '',
        color: '',
        price: '',
        description: ''
    });
    const [image, setImage] = useState('');

    const [addProduct, { isLoading, error }] = useAddProductMutation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!product.name || !product.category || !product.price || !product.color || !product.description) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            await addProduct({ ...product, image, author: user?._id }).unwrap();
            alert('Product added successfully!');
            setProduct({ name: '', category: '', color: '', price: '', description: '' });
            setImage('');
            navigate("/shop");
        } catch (err) {
            console.error('Failed to add product:', err);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Add New Product</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                <TextInput style={{marginLeft:"10px"}}
                    label="Price"
                    name="price"
                   
                    placeholder="  50 "
                    value={product.price}
                    onChange={handleChange}
                />
               
                <UploadImage
                    name="image"
                    id="image"
                    value={(e) => setImage(e.target.value)}
                    placeholder='Write a product description'
                    setImage={setImage}
                />
                <div>
                    <label htmlFor="description" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4a4a4a', marginBottom: '4px' }}>
                        Description
                    </label>
                    <textarea
                        rows={6}
                        name="description"
                        id="description"
                        value={product.description}
                        placeholder='Write a product description'
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                            backgroundColor: '#007BFF',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                            opacity: isLoading ? 0.7 : 1
                        }}
                    >
                        {isLoading ? 'Adding...' : 'Add Product'}
                    </button>
                </div>
            </form>
            {error && <p style={{ color: 'red', marginTop: '16px' }}>Error adding product: {error.message}</p>}
        </div>
    );
};

export default AddProduct;