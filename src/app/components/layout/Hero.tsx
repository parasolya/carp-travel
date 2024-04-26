'use client';
import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="box-border mx-auto px-5 py-20 md:px-8 md:pb-16 pt-27 md:pt-36 lg:px-20 lg:pb-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg-hero.png)' }}
    >
      <div className="w-full h-full box-border flex flex-col">
        <div className="relative mb-60 md:mb-20">
          <div className="absolute top-20 md:-top-1 w-2/3 md:w-2/3">
            <h1 className="lg:w-3/4 font-medium text-5xl md:text-[67px] lg:text-8xl leading-tight tracking-tight uppercase">
              Uncover <span className="font-thin">Carpathian’s Secrets</span>
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-3/7">
              <h2 className="font-medium text-[37px] md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
                7 <span className="font-thin ">DAYS</span>
              </h2>
              <p className="-mt-1 font-thin tracking-[0.6em] md:tracking-[1.5em]">
                JOURNEY
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <div className="md:w-1/3 md:flex flex-col justify-end">
            <p className="md:text-xs font-thin md:leading-5 lg:leading-6">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col md:justify-between gap-8">
            <p className="text-sm lg:text-base font-thin tracking-widest">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>

            <Link
              className="cursor-pointer"
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
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl uppercase">
                  Join NOW
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
