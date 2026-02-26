import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../App.css';
import { popularImages } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Products = () => {

     const navigate = useNavigate();

    return (
        <div>
            <div className="container">

                <div className='text-center'>
                    <p>Top Products</p>
                    <h2>Popular Products</h2>
                </div>


                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next'
                    }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={40}
                    breakpoints={{
                        0: { slidesPerView: 1 },    // For small screens
                        768: { slidesPerView: 2 },  // For tablets
                        1024: { slidesPerView: 3 }  // For desktops
                    }}

                    style={{ width: '100%', height: '100%', marginTop: '20px' }}
                >
                    {popularImages.map((value) => (
                        <SwiperSlide key={value.id}>

                            <div className="position-relative d-inline-block">

                                <img src={value.image} alt={`Slide ${value.id}`} style={{ width: '100%', height: '100%' }}  onClick={() => navigate(`/Product/${value.id}`)} />

                                <div
                                    className="position-absolute d-flex flex-column gap-3 icons"
                                    style={{ top: '10px', right: '10px' }}
                                >
                                    <i className="fa-solid fa-magnifying-glass bg-white p-2 rounded-circle shadow-sm"></i>
                                    <i className="fa-solid fa-heart bg-white p-2 rounded-circle shadow-sm" onClick={()=>navigate(`/WishList/${value.id}`)}></i>
                                    <i className="fa-solid fa-bag-shopping bg-white p-2 rounded-circle shadow-sm"></i>
                                </div>

                            </div>
                            <div>
                                <p className="my-2 fs-5">{value.name}</p>
                                <p>{value.para6}</p>
                                <p>{value.amt1}</p>
                            </div>

                        </SwiperSlide>
                    ))}
                    <div className="custom-prev swiper-button-prev"></div>
                    <div className="custom-next swiper-button-next"></div>
                </Swiper>
                <div className='text-center my-3'>
                    <button className='btn btn-light px-5 py-2 custom-hover' onClick={() => navigate(`/shop/`)}>Shop More Products</button>
                </div>

            </div>
        </div>
    )
}

export default Products
