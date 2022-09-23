import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import a from '../Asset/1.png';
import b from '../Asset/2.png';
import c from '../Asset/3.png';

import '../App.css';

// import required modules
import { Autoplay, Navigation } from "swiper";

export const Screen = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={a} alt="" /></SwiperSlide>
        <SwiperSlide><img src={b} alt="" /></SwiperSlide>
        <SwiperSlide><img src={c} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Screen;