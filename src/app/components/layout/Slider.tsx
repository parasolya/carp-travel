'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { nanoid } from 'nanoid';

import "swiper/css";
import 'swiper/css/effect-fade';
// import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode} from "swiper/modules";

export const ServiceData = [
  {
    
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "./bg-services-1.png",
  },
  {
    
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "./bg-services-2.png",
  },
  {
    
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "./bg-services-3.png",
  },
  {
    
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "./bg-services-2.png",
  },
  {
    
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "./bg-services-3.png",
  },
 
];

const Slider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
      <Swiper
        // breakpoints={{
        //   340: {
        //     slidesPerView: 2,
        //     spaceBetween: 15,
        //   },
        //   700: {
        //     slidesPerView: 3,
        //     spaceBetween: 15,
        //   },
        // }}
        effect={'fade'}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={nanoid()}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[400px]  overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
               
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;