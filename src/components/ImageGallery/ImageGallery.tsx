import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react.js';
import {Autoplay, Keyboard, Pagination, Scrollbar, Zoom} from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';
import './ImageGallery.scss';

// @ts-ignore
export const ImageGallery = ({missionary}) => {
    return (
        <div className="ion-padding-top">
            <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
                    autoplay={true}
                    keyboard={true}
                    pagination={true}
                    scrollbar={true}
                    zoom={true}>
                <SwiperSlide><img className="image" src={missionary.photo} alt={missionary.title}/></SwiperSlide>
                <SwiperSlide><img className="image" src={missionary.photo} alt={missionary.title}/></SwiperSlide>
                <SwiperSlide><img className="image" src={missionary.photo} alt={missionary.title}/></SwiperSlide>
            </Swiper>
        </div>
    );
};