import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../App.css';
import { blogImages } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';


const Blogs = () => {
  
    const navigate = useNavigate()

    const handleeClick = (value) => {

        navigate('/Admin', { state: { blog: value } });

    }


    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="container my-4 px-3">
                <div className='text-center my-4'>
                    <p>LATEST POST</p>
                    <h2>Blog & Insights</h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next'
                    }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 }, // Tablet
                        1024: { slidesPerView: 3 } // Desktop
                    }}
                    style={{ width: '100%', marginTop: '20px' }}
                >
                    {blogImages.map((value) => (
                        <SwiperSlide key={value.id}>
                            <div className="image-wrapper" style={{ textAlign: 'center' }}>
                                <img
                                    src={value.image}
                                    alt={`Slide ${value.id}`}
                                     onClick={() => handleeClick(value)}
                                    style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'cover' }}
                                />
                            </div>

                            <div className='d-flex align-items-center gap-2 my-2 justify-content-center'>
                                <p className='mb-0'>{value.admin}</p>
                                <i className="bi bi-dot"></i>
                                <p className='mb-0'>{value.date}</p>
                            </div>

                            <h5 className='my-1 text-center'>{value.content}</h5>
                        </SwiperSlide>
                    ))}
                    <div className="custom-prev swiper-button-prev"></div>
                    <div className="custom-next swiper-button-next"></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Blogs;
