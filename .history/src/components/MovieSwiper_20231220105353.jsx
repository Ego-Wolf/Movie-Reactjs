import React from 'react'
import './movieSwiper.css'

// import Swiper core and required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MovieSwiper({slides}) {
    return (
        <Swiper
        >
            

            {
                slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide.previewImg} alt="Preview Image" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSwiper
