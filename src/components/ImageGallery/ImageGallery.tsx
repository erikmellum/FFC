import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react.js';
import {Autoplay, Keyboard, Pagination, Navigation, Zoom} from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import "swiper/modules/navigation/navigation.min.css";
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';
import './ImageGallery.scss';

// @ts-ignore
export const ImageGallery = ({missionary}) => {
    return (
        <Swiper modules={[Autoplay, Keyboard, Pagination, Navigation, Zoom]}
                autoplay={true}
                keyboard={true}
                pagination={true}
                navigation={true}
                zoom={true}>
            <SwiperSlide><div className="swiper-zoom-container"><img src={missionary.photo} alt={missionary.title}/></div></SwiperSlide>
            <SwiperSlide><div className="swiper-zoom-container"><img src={missionary.photo} alt={missionary.title}/></div></SwiperSlide>
            <SwiperSlide><div className="swiper-zoom-container"><img src={missionary.photo} alt={missionary.title}/></div></SwiperSlide>
        </Swiper>
    );
};