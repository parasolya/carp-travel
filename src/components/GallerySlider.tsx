'use client';

import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import gallery from '../data/gallery.json';
import { GallerySlide } from './GallerySlide';

import 'swiper/css';
import 'swiper/css/navigation';
import Button from './ui/Button';

function GallerySlider() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        navigation={false}
        spaceBetween={24}
        slidesPerView={3}
        initialSlide={1}
        centeredSlidesBounds={true}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        ref={swiperRef}
        wrapperTag="ul"
        className="gallery h-[609px] md:h-[294px] lg:h-[429px]"
      >
        {gallery.slides.map(({ img, alt }) => (
          <SwiperSlide
            tag="li"
            key={nanoid()}
            className="slider flex items-center"
          >
            {({ isActive }) => (
              <GallerySlide isActive={isActive} img={img} alt={alt} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" swiper-navigation flex justify-around items-center">
        <Button
          variant="slider"
          onClick={() =>
            swiperRef.current && swiperRef.current.swiper.slidePrev()
          }
        >
          Back
        </Button>
        <Button
          variant="slider"
          onClick={() =>
            swiperRef.current && swiperRef.current.swiper.slideNext()
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default GallerySlider;
