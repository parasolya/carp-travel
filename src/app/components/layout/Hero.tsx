'use client'
import React from 'react';
import Title from './Title';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="box-border md:h-screen mx-auto px-10 py-20 md:px-8 md:py-16 lg:px-20 lg:py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg-hero.png)' }}
    >
      <div className="w-full box-border flex flex-col justify-between gap-8">
        <div className="relative box-border">
          <div className="mt-16 md:mt-0">
            <div className="w-2/3 mt-2 md:mt-0">
              <Title firstWords="Uncover" secondWords="Carpathian’s Secrets" />
            </div>
          </div>

          <div className="absolute w-3/7 md:static top-0 right-0">
            <h2 className="md:w-2/3 lg:w-3/4 mb-4 font-medium text-4xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
              7 <span className="font-thin ">DAYS</span>
            </h2>
            <p className="-mt-6 font-thin tracking-[0.4em]">JOURNEY</p>
          </div>
        </div>
        <p className="md:text-xs font-thin md:leading-5 lg:leading-6">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="text-sm lg:text-base font-thin">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        
        <Link
        className='cursor-pointer'
            activeClass="active"
            to="career"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
        <div className="relative w-full h-[50px] flex bg-white bg-opacity-10">
          <div className="box-border h-full w-1/6 ">
            <div className="h-1/6 border-t border-l border-white"></div>
            <div className="h-4/6"></div>
            <div className="h-1/6 border-b border-l border-white"></div>
          </div>
          <div className="h-full w-4/6"></div>
          <div className="h-full w-1/6 ">
            <div className="h-1/6 border-t border-r border-white"></div>
            <div className="h-4/6"></div>
            <div className="h-1/6 border-b border-r border-white"></div>
          </div>
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl uppercase'>Join NOW</p>
        </div>
        </Link>
      </div>
    </section>
  );
}
