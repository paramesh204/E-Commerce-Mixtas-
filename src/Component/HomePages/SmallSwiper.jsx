import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrivalImages } from '../../assets/assets';
import '../../App.css';
import { useContext } from 'react';
// import { createContext } from 'react';


function SmallSwiper() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="text-center my-5">
        <p>LATEST PRODUCTS</p>
        <h2>New Arrivals</h2>
      </div>

      <div className="row justify-content-center">
        {arrivalImages.map((value, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
            <div className="position-relative">
              <img
                src={value.image}
                alt={value.name}
                onClick={() => navigate(`/Product/${value.id}`)}
                className="img-fluid mb-2"
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <div
                className="position-absolute d-flex flex-column gap-2 icons"
                style={{ top: '10px', right: '20px' }}
              >
                <i className="fa-solid fa-magnifying-glass bg-white p-2 rounded-circle shadow-sm"></i>
                <i className="fa-solid fa-heart bg-white p-2 rounded-circle shadow-sm" onClick={() => navigate(`/WishList/${value.id}`)}></i>
                <i className="fa-solid fa-bag-shopping bg-white p-2 rounded-circle shadow-sm" ></i>
              </div>

              <p className="fw-bold mt-2">{value.name}</p>
              <p>{value.para5}</p>
              <p className="text-success">{value.amt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallSwiper;
