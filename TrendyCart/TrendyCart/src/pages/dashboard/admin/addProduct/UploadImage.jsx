import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = ({ name, setImage }) => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const uploadSingleImage = (base64) => {
        setLoading(true);
        axios
            .post("http://localhost:5000/uploadImage", { image: base64 })
            .then((res) => {
                const imageUrl = res.data;
                setUrl(imageUrl);
                alert("Image uploaded successfully");
                setImage(imageUrl); 
            })
            .finally(() => setLoading(false));
    };

    const uploadImage = async (event) => {
        const files = event.target.files;
        if (files.length === 1) {
            const base64 = await convertBase64(files[0]);
            uploadSingleImage(base64);
            return;
        }
    };

    return (
        <div style={{ marginBottom: '16px' }}>
            <label htmlFor={name} style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                Image:
            </label>
            <input
                onChange={uploadImage}
                name={name}
                id={name}
                type="file"
                style={{ display: 'block', marginTop: '8px', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', color:"gray" }}
            />
            {loading && (
                <div style={{ marginTop: '8px', fontSize: '14px', color: '#2563EB' }}>
                    <p>Uploading...</p>
                </div>
            )}
            {url && (
                <div style={{ marginTop: '8px', fontSize: '14px', color: '#059669' }}>
                    <p>Image uploaded successfully!</p>
                    <img src={url} alt="Uploaded" style={{ width: '100px', height: '100px', marginTop: '8px', borderRadius: '4px' }} />
                </div>
            )}
        </div>
    );
};

export default UploadImage;