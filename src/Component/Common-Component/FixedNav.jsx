import React from 'react';
import { Link } from 'react-router-dom';

const FixedNav = () => {
  return (
    <>
      {/* Fixed Navigation Bar */}
      <div
        className="link d-flex gap-5 justify-content-center w-100 py-3"
        style={{
          position: 'sticky', // use 'fixed' or 'sticky' based on your needs
          top: 0,
          left: 0,
          right: 0,
          background: 'white',
          zIndex: 1000,
          borderBottom: '1px solid #ccc',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/FAQs">FAQs</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      {/* Spacer to prevent content overlap */}
      {/* <div style={{ height: '20px' }}></div> */}
    </>
  );
};

export default FixedNav;
