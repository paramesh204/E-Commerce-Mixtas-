import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { shopImages, arrivalImages, popularImages } from '../assets/assets';
import { relatedImages } from '../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [num, setNum] = useState(0);

  const found =
    shopImages.find((value) => value.id === Number(id)) ||
    arrivalImages.find((value) => value.id === Number(id)) ||
    popularImages.find((value) => value.id === Number(id));

  if (!found) {
    return (
      <div className="container my-5">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-dark mt-3">Go back home</Link>
      </div>
    );
  }

  const addFun = () => {
    setNum(num + 1)
  }
  const removeFun = () => {
    if (num > 0) {
      setNum(num - 1)
    }

  }

  return (
    <div>
      <div className="container">
        <p className='fs-5 my-3'>
          <strong>
            <Link to='/' className='text-decoration-none text-dark'>Home</Link> /
            <Link to='/Shop' className='text-decoration-none text-dark'>Shop</Link> /
          </strong>
          {found.name}
        </p>

        <div className='row'>
          <div className='col-12 col-lg-6 col-md-12'>
            <img src={found.image} alt={found.name} className='w-100' />
          </div>

          <div className='col-12 col-lg-6 col-md-12'>
            <h2>{found.name} - {found.amt1 || found.amt2}</h2>
            <hr />
            <p className='text-secondary'>{found.para || 'No description available.'}</p>

            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-md-6 col-sm-12 purchase">
                <p className='border border-1 d-inline-block px-3 py-1 rounded fs-3'>
                  <span className='me-2' onClick={removeFun} style={{ cursor: 'pointer' }}>-</span>
                  <span className='mx-2' >{num}</span>
                  <span className='ms-2' onClick={addFun} style={{ cursor: 'pointer' }}>+</span>
                </p>
              </div>

              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className='purchase'>
                  <button style={{ padding: '10px 45px', backgroundColor: 'black', color: 'white', border: 'none', marginBottom: '10px', borderRadius: '5px' }}>Add to Cart</button>
                </div>
              </div>

              <div className='my-3'>
                <p className='fs-5 shop-wish'><i className="fa-regular fa-heart me-2 my-3"></i>Add to Wishlist</p>
              </div>

              <div className='accordion my-4'>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#productCategoryCollapse">
                      <strong className='text-dark'>Description</strong>
                    </button>
                  </h2>
                  <div id="productCategoryCollapse" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <p>{found.para || 'No extended description available.'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion my-4">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#productCollapse1">
                      <strong className='text-dark'>Additional Information</strong>
                    </button>
                  </h2>
                  <div id="productCollapse1" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <div className='d-flex justify-content-between' style={{ width: '55%' }}>
                        <p>Color</p>
                        <span className='text-secondary'>Blue, Gray, Green, Red, Yellow</span>
                      </div>
                      <div className='d-flex justify-content-between' style={{ width: '45%' }}>
                        <p>Size</p>
                        <span className='text-secondary'>Large, Medium, Small</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion my-4">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#productCollapse2">
                      <strong className='text-dark'>Reviews (0)</strong>
                    </button>
                  </h2>
                  <div id="productCollapse2" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <p>There are no reviews yet. Be the first to review "{found.name}"</p>
                      <textarea className='w-100 mb-3' rows="5" placeholder="Write your review here..."></textarea>
                      <input type="text" className='form-control mb-2' placeholder="Your Name*" />
                      <input type="email" className='form-control mb-3' placeholder="Your Email*" />
                      <button className='btn btn-dark'>Submit</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='text-center my-4'>
          <h2 className='fs-1 mb-5' style={{ fontWeight: 'normal' }}>Related Products</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={3}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {relatedImages.map((value) => (
            <SwiperSlide key={value.id}>
              <div className="position-relative d-inline-block">
                <img src={value.image} alt={`Slide ${value.id}`} onClick={() => navigate(`/Product/${value.id}`)} style={{ width: '100%', height: '100%' }} />
                <div className="position-absolute d-flex flex-column gap-3 icons" style={{ top: '10px', right: '10px' }}>
                  <i className="fa-solid fa-magnifying-glass bg-white p-2 rounded-circle shadow-sm"></i>
                  <i className="fa-solid fa-heart bg-white p-2 rounded-circle shadow-sm" onClick={()=>navigate(`/WishList/${value.id}`)}></i>
                  <i className="fa-solid fa-bag-shopping bg-white p-2 rounded-circle shadow-sm" ></i>
                </div>
              </div>
              <div>
                <p className="my-2 fs-5">{value.name}</p>
                <p>{value.para}</p>
                <p>{value.amt2}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-prev swiper-button-prev"></div>
          <div className="custom-next swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Product;