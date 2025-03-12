import React from 'react';
import { FaShieldAlt, FaRegFileAlt, FaUserAlt, FaRegClock, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div style={{backgroundColor:"#f4e5ec",padding:"20px"}}>
      <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      marginBottom: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      borderColor: 'lightgray',
      borderWidth: '2px',
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', color: '#4c4c4c', margin: '0',fontWeight:"bold" }}>
        
          Privacy Policy
        </h1>
        <p style={{ fontSize: '16px', color: '#555' }}>Last updated: January 29, 2025</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaShieldAlt style={{ marginRight: '10px', fontSize: '1.5rem',color: '#ec4899', verticalAlign: 'middle' }} />
          Introduction
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}>
          At TrendyCart, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaUserAlt style={{ marginRight: '10px', fontSize: '1.5rem', color: '#ec4899',verticalAlign: 'middle' }} />
          Information We Collect
        </h2>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', listStyleType: 'disc' }}>
          <li><strong>Personal Data:</strong> Name, email address, shipping address, payment details.</li>
          <li><strong>Usage Data:</strong> Browsing history, IP address, device details.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaShieldAlt style={{ marginRight: '10px', fontSize: '1.5rem',color: '#ec4899', verticalAlign: 'middle' }} />
          How We Use Your Information
        </h2>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', listStyleType: 'disc' }}>
          <li><strong>Order Processing:</strong> To fulfill your orders and manage deliveries.</li>
          <li><strong>Personalization:</strong> To tailor product recommendations and enhance your shopping experience.</li>
          <li><strong>Promotions:</strong> To send updates and offers (you can opt out at any time).</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaShieldAlt style={{ marginRight: '10px', fontSize: '1.5rem',color: '#ec4899', verticalAlign: 'middle' }} />
          Data Security
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}>
          We implement industry-standard security measures to safeguard your personal data. However, no data transmission over the internet can be guaranteed to be 100% secure.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaRegClock style={{ marginRight: '10px', fontSize: '1.5rem',color: '#ec4899', verticalAlign: 'middle' }} />
          Cookie Policy
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}>
          We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies. You can manage cookie settings in your browser.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaRegClock style={{ marginRight: '10px', fontSize: '1.5rem',color: '#ec4899', verticalAlign: 'middle' }} />
          Your Rights
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}>
          You have the right to access, update, or delete your personal data. Contact us for any privacy-related requests.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaRegFileAlt style={{ marginRight: '10px', fontSize: '1.5rem',color: '#ec4899', verticalAlign: 'middle' }} />
          Changes to This Policy
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}>
          TrendyCart reserves the right to update this Privacy Policy. Any changes will be reflected on this page, and we encourage you to review it regularly.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color: '#4c4c4c',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          fontWeight:"semibold",
        }}>
          <FaEnvelope style={{ marginRight: '10px', fontSize: '1.5rem', color: '#ec4899',verticalAlign: 'middle' }} />
          Contact Us
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}>If you have any questions about our Privacy Policy, feel free to contact us:</p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}><strong>Email:</strong> support@trendycart.com</p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'black' }}><strong>Address:</strong> 123 Fashion Street, Trendy City, TC 12345</p>
      </section>
      <br />
    </div>
    </div>
  );
};

export default PrivacyPolicy;
