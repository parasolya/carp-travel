'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { nanoid } from 'nanoid';
import ServiceCard from "./ServiceCard";

import "swiper/css";
import 'swiper/css/effect-fade';
// import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode} from "swiper/modules";

type Count = {
  count: number;
} 

const Slider = ({ count }: Count) => {

  const numbers = Array.from({ length: count }, (_, index) => index + 1);


  return (
    <div className="h-full w-full">
      <Swiper
        effect={'fade'}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // modules={[FreeMode, Pagination]}
        className="h-full w-full"
        // className="max-w-[90%] lg:max-w-[80%]"
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

{/* <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[400px]  overflow-hidden cursor-pointer">
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${item.backgroundImage})` }}
/>
<div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
<div className="relative flex flex-col gap-3">
 
  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
  <p className="lg:text-[18px]">{item.content} </p>
</div>

</div */}

{/* <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]"></div> */}