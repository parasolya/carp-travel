'use client';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

import React, { useEffect, useRef } from 'react';
// import Swiper from 'swiper';

export default function Carusel() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(1, 0); 
    }
  }, []);

  return (
    // <div className="px-4 py-4 mx-auto">
    <>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: -10,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={true }
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
      
        <SwiperSlide>
          <img
            // className="w-100 h-42 rounded-2 object-cover"
            src="/gallery-1.png"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className="w-100 h-42 rounded-2 object-cover"
            src="/gallery-2.png"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className="w-100 h-42 rounded-2 object-cover"
            src="/gallery-3.png"
            alt="slide_image"
          />
        </SwiperSlide>

        {/* <div className=" slider-controler relative mb-2 flex items-center justify-center">
          <div className="swiper-button-prev slider-arrow after:'' text-black"><div className="absolute inset-0 bg-red-500"></div></div>
          <div className="text-black">Next</div>
          <div className="relative w-15 !important mb-1"></div>
        </div> */}
{/* 
<div className="swiper-navigation flex justify-center items-center mt-4">
    <button className="swiper-button-prev bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l"
 onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
 >
      Back
    </button>
    <button className="swiper-button-next bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r"
    onClick={() => swiperRef.current && swiperRef.current.slideNext()}
    >
      Next
    </button>
  </div> */}


      </Swiper>
      {/* </div> */}
    </>
  );
}
