import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../App.css';
import { teamImages } from '../../assets/assets'

const Team = () => {

    return (
        <div className="container my-5">
            <div className='text-center my-2 mb-5'>        <h2 style={{ fontSize: '45px' }}>Meet The Our Team</h2></div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next'
                }}
               
                autoplay={{ delay: 3000 }}
                loop
                spaceBetween={10}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: {
                        slidesPerView: 3,
                    },
                    992: { slidesPerView: 3 },
                }}
                style={{ width: '100%', height: '100%', marginTop: '20px' }}
            >

                {teamImages.map((member, idx) => (
                    <SwiperSlide key={member.id ?? idx}>
                        {/* If your ids are unique, prefer member.id */}
                        <div className="text-center w-100">

                            <img
                                src={member.image}
                                alt={member.name}
                                style={{ width: '350px', height: '350px', objectFit: 'contain' }}
                            />
                            <div>
                                <h2>{member.name}</h2>
                                <p>{member.work}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="custom-prev swiper-button-prev"></div>
                <div className="custom-next swiper-button-next"></div>
            </Swiper>
        </div>
    )
}

export default Team
