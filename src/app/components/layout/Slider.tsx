'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import { nanoid } from 'nanoid';
import ServiceCard from './ServiceCard';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

type Count = {
  count: number;
};

const Slider = ({ count }: Count) => {
  const numbers = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <div className="h-full w-full">
      <Swiper
        effect={'fade'}
        freeMode={true}
        modules={[Pagination, EffectFade]}
        className="mySwiper h-full w-full box-border"
      >
        {numbers.map((number, index) => (
          <SwiperSlide key={nanoid()} className="h-full w-full">
            <ServiceCard key={nanoid()} elementNumber={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
