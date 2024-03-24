import React, { useState } from 'react'
import './trend.css'

// import Swiper core and required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


function Trend() {
    const [slides, setSlides] = useState{[]};
    const fetchData = () => {
        fetch('https')
    }
  return (
    <main>

    </main>
  )
}

export default Trend
