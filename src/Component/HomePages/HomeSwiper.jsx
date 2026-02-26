import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { sliderImages } from '../../assets/assets';
import { slideImages } from '../../assets/assets';
import '../../App.css';
import { useNavigate } from 'react-router-dom';


const HomeSwiper = () => {
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next'
        }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-100"
      >
        {sliderImages.map((slide) => (
          <SwiperSlide key={slide.id} className="position-relative ">
            {/* Slide content */}
            <div style={{ width: '100%', height: '800px', overflow: 'hidden' }}>
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="img-fluid w-100"
                onClick={() => navigate(`/shop/${value.id}`)}
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>


            <div
              className="position-absolute text-white p-3 "
              style={{ top: '10%', left: '5%', zIndex: 10, fontWeight: 'bold', fontSize: '10px' }}
            >
              <h3 className="text-dark fs-md-3" style={{ fontWeight: 'bold' }}>{slide.para}</h3>
              <h1 className="text-dark display-6 display-md-3 " style={{ fontWeight: 'bold', fontSize: '80px' }}>{slide.para1}</h1>
              <h1 className="text-dark display-6 display-md-3 " style={{ fontWeight: 'bold', fontSize: '80px' }}>{slide.para2}</h1>
              <h1 className="text-dark display-6 display-md-3" style={{ fontWeight: 'bold', fontSize: '80px' }}>{slide.para3}</h1>
              <button className="btn btn-dark mt-3 px-5 py-3">Shop Now</button>
            </div>
          </SwiperSlide>
        ))}


        <div className="custom-prev swiper-button-prev"></div>
        <div className="custom-next swiper-button-next"></div>
      </Swiper>








      <div className="container my-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next'
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,

            },
            992: {
              slidesPerView: 5,
            },
          }}
          style={{ width: '95%', height: '100%', marginTop: '20px' }}
        >
          {slideImages.map((value) => (
            <SwiperSlide key={value.id}>
              <div className="text-center">
                <img
                  src={value.image}
                  alt={`Slide ${value.id}`}
                  onClick={() => navigate(`/Shop/`)}

                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <div>
                  <p className="my-2 fs-5 d-inline-block">{value.para4}</p>
                  <img src={value.img} alt="" srcset="" className='set'
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}

          <div className="custom-prev swiper-button-prev"></div>
          <div className="custom-next swiper-button-next"></div>
        </Swiper>
      </div>

    </>
  );
};

export default HomeSwiper;
