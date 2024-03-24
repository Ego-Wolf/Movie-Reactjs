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

function MovieSwiper({slies}) {
    return (
        <Swiper>
            effect = {'EffectCoverflow'}
            grabCusor = {true}
            centerSlide = {true}
            slidesPreView = {'auto'}
            autoplay = {{
                delay: 255,
                disableOnInterface: false;
            }}
            coverflowEffect = {{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadow: true,
            }}
            logo = {{ true }}
            {
                slides.map(slide => (
                    <SwiperSlide>
                        <img src="" alt="Preview Image" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSwiper
