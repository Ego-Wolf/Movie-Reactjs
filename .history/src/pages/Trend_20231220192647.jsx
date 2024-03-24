import React, { useState, useEffect } from 'react'
import './trend.css'

// import Swiper core and required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


function Trend() {
    const [slides, setSlides] = useState([]);
    const fetchData = () => {
        // ở projects real thì có thể fetch name khác
        fetch('http://localhost:3000/data/movieData.json')
        .then(res => res.json())
        .then(data => {
            setSlides(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);
        
    return (
        <section id="trend" className='trend'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className='section-title'>
                        Coming Soon
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Trend
