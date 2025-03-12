import React from 'react';
import {  FaEnvelope, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const WorkWithUs = () => {
  return (
   <div style={{ padding: '20px',backgroundColor:"#f4e5ec"}}>
     <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
     
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', color:"#4c4c4c", margin: '0', fontWeight: '600' }}>
        
          Work With Us
        </h1>
        <p style={{ fontSize: '18px', color: '#555' }}>Join our team of passionate individuals</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
         color:"#4c4c4c",
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <FaBriefcase style={{ marginRight: '10px', fontSize: '1.5rem', verticalAlign: 'middle',color:"#ec4899" }} />
          Available Positions
        </h2>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', listStyleType: 'disc' }}>
          <li><strong>Front-End Developer:</strong> Build responsive, user-friendly interfaces.</li>
          <li><strong>Back-End Developer:</strong> Develop APIs and manage server-side technologies.</li>
          <li><strong>UI/UX Designer:</strong> Create beautiful and functional user experiences.</li>
          <li><strong>Marketing Specialist:</strong> Help us expand our reach and grow the brand.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color:"#4c4c4c",
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <FaMapMarkerAlt style={{ marginRight: '10px', fontSize: '1.5rem', verticalAlign: 'middle' ,color:"#ec4899"}} />
          Location
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Our office is located in the heart of Trendy City. It's a vibrant and growing tech hub!
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '24px',
          color:"#4c4c4c",
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <FaEnvelope style={{ marginRight: '10px', fontSize: '1.5rem', verticalAlign: 'middle',color:"#ec4899" }} />
          How to Apply
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          If you're passionate about joining our team, send us your resume and a cover letter to:
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}><strong>Email:</strong> careers@trendycart.com</p>
      </section>

     
    </div>
   </div>
  );
};

export default WorkWithUs;
