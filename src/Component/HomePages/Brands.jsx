import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { brandsImages } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Brands = () => {

   const navigate = useNavigate();


  return (
    <div>
      <div className="container my-4'">
        <div className='text-center my-4'>
          <p>Top Brands</p>
          <h2>Popular Brands</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next'
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={6}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 }
          }}

          style={{ width: '100%', height: '100%', marginTop: '20px' }}
        >
          {brandsImages.map((value) => (
            <SwiperSlide key={value.id}>
              <div>
                <img
                  src={value.image}
                  alt={`Slide ${value.id}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onClick={() => navigate(`/Shop/`)}
                />
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

export default Brands;
