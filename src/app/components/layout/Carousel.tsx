'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import React, { useRef } from 'react';

export default function Carousel() {
  const swiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeSlideIndex = parseInt(
      activeSlide.getAttribute('data-swiper-slide-index')
    );

    setActiveIndex(activeSlideIndex);
  };

  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        initialSlide={1}
        centeredSlidesBounds={true}
        spaceBetween={200}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 1000,
          modifier: 0.5,
          slideShadows: true,
        }}
        navigation={false}
        modules={[EffectCoverflow, Navigation]}
        ref={swiperRef}
        className="swiper_container absolute z-10"
      >
        <div className="swiper-wrapper w-500">
          <SwiperSlide className="h-107 w-152">
            <img
              src="/gallery-2.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="h-107 w-152">
            <img
              src="/gallery-1.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="h-107 w-152">
            <img
              src="/gallery-3.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="h-107 w-152">
            <img
              src="/gallery-1.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="h-107 w-152">
            <img
              src="/gallery-2.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="h-107 w-152">
            <img
              src="/gallery-3.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </div>

        <div className=" swiper-navigation flex justify-around items-center">
          <button
            className=" text-white font-thin text-2xl uppercase"
            onClick={() =>
              swiperRef.current && swiperRef.current.swiper.slidePrev()
            }
          >
            Back
          </button>
          <button
            className=" text-white font-thin text-2xl uppercase"
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
