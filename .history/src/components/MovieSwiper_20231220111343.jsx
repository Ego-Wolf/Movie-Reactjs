import React from 'react'
import './movieSwiper.css'

// import Swiper core and required modules
import { Autoplay, EffectCoverflow} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


function MovieSwiper({slides}) {
    return (
        <Swiper
            effect = {'EffectCoverflow'}
            grabCursor = {true}
            centerSlides = {true}
            slidesPreView = {'auto'}
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
                        <SwiperSlide>
                            <img src={slide.previewImg} alt="Preview Image" />
                        </SwiperSlide>
                    ))}
        </Swiper>
    )
}

export default MovieSwiper
