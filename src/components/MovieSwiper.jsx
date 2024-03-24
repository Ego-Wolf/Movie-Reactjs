import React from 'react'
import './movieSwiper.css'

// import Swiper core and required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


function MovieSwiper({slides, slideChange}) {
    return (
        <Swiper
            effect = {'coverflow'}
            grabCursor = {true}
            centeredSlides = {true}
            slidesPerView = {'auto'}
            autoplay = {{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect = {{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            logo = { true }
            modules={[Autoplay, EffectCoverflow]}
            className = "movieSwiper"
            >
                {slides.map(slide => (
                        <SwiperSlide key={slide._id}>
                            <img 
                            src={slide.previewImg} 
                            alt="Preview Image" 
                            onClick={() => slideChange(slide._id)}/>
                        </SwiperSlide>
                    ))}
        </Swiper>
    )
}

export default MovieSwiper
