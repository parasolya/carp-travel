'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

import React, { useRef } from 'react';

export default function Carus() {
  const swiperRef = useRef<any>(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeSlideIndex = parseInt(activeSlide.getAttribute('data-swiper-slide-index'));
    
    setActiveSlideIndex(activeSlideIndex);
  };

  return (
    <div className=" mx-auto h-10 bg-gray-700 ">
      <Swiper
        // effect={'coverflow'}
        autoHeight={true}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        initialSlide={1}
        
        spaceBetween={10}
        navigation={false}
        modules={[EffectCoverflow, Navigation]}
        // loopAdditionalSlides={2}
        ref={swiperRef}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="relative z-10 bg-gray-900 h-107"
      >
         <div className='swiper-wrapper h-107'>
        <SwiperSlide>
          <div
            className={`${
              activeSlideIndex === 0 ? 'h-107 w-152' : 'h-56 w-78'
            }`}
          >
            <img
              className={`object-cover filter ${
                activeSlideIndex === 0 ? 'h-107 w-152' : 'brightness-50 h-56 w-78'
              }`}
              src="/gallery-1.png"
              alt="slide_image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={` ${activeSlideIndex === 1 ? 'h-107 w-152' : 'h-56 w-78'}`}
          >
            <img
              className={`object-cover filter ${
                activeSlideIndex === 1 ? 'h-107 w-152' : 'brightness-50 h-56 w-78'
              }`}
              src="/gallery-2.png"
              alt="slide_image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${
              activeSlideIndex === 2 ? 'h-107 w-152' : 'h-56 w-78'
            }`}
          >
            <img
              className={`object-cover filter ${
                activeSlideIndex === 2 ? 'h-107 w-152' : 'brightness-50 h-56 w-78'
              }`}
              src="/gallery-3.png"
              alt="slide_image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${
              activeSlideIndex === 3 ? 'h-107 w-152' : 'h-56 w-78'
            }`}
          >
            <img
              className={`object-cover filter ${
                activeSlideIndex === 3 ? 'h-107 w-152' : 'brightness-50 h-56 w-78'
              }`}
              src="/gallery-1.png"
              alt="slide_image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={` ${activeSlideIndex === 4 ? 'h-107 w-152' : 'h-56 w-78'}`}
          >
            <img
              className={`object-cover filter ${
                activeSlideIndex === 4 ? 'h-107 w-152' : 'brightness-50 h-56 w-78'
              }`}
              src="/gallery-2.png"
              alt="slide_image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${
              activeSlideIndex === 5 ? 'h-107 w-152' : 'h-56 w-78'
            }`}
          >
            <img
              className={`object-cover filter ${
                activeSlideIndex === 5 ? 'h-107 w-152' : 'brightness-50 h-56 w-78'
              }`}
              src="/gallery-3.png"
              alt="slide_image"
            />
          </div>
        </SwiperSlide>                   
        </div>

        <div className="swiper-navigation absolute z-30 top-20  flex justify-between items-center mt-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l"
            onClick={() =>
              swiperRef.current && swiperRef.current.swiper.slidePrev()
            }
          >
            Back
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r"
            onClick={() =>
              swiperRef.current && swiperRef.current.swiper.slideNext()
            }
          >
            Next
          </button>
        </div>
      </Swiper>
    </div>
  );
}


{/* <SwiperSlide>
<div
  className={` ${activeSlideIndex === 1 ? 'h-107 w-152' : 'h-56 w-78'}`}
>
  <img
    className={`object-cover filter ${
      activeSlideIndex === 1 ? 'h-107 w-152' : 'brightness-50 h-56 w-78'
    }`}
    src="/gallery-2.png"
    alt="slide_image"
  />
</div>
</SwiperSlide> */}

{/* <SwiperSlide>
          <div className={`h-107 w-152 ${activeSlideIndex === 0 ? 'active-slide' : 'inactive-slide'}`}>
            <img className="object-cover filter brightness-50" src="/gallery-1.png" alt="slide_image" />
          </div>
        </SwiperSlide> */}