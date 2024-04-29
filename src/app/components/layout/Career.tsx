'use client';
import React from 'react';
import FormChooseUs from './FormChooseUs';
import WhyUs from './WhyUs';
import advantages from '../../../../shared/advantages';
import Title from './Title';
import { useMediaQuery } from 'react-responsive';

export default function Career() {
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <section
      id="career"
      className="box-border md:h-screen bg-cover bg-center px-5 py-16 md:px-8 md:py-16 lg:px-20 lg:py-16 flex flex-col justify-between"
      style={{ backgroundImage: 'url(/bg-career.png)' }}
    >
      { (isMediumScreen) ? (<div className="flex items-center md:mb-2 lg:mb-4">
        <Title  firstWords='CHOOSE' secondWords='us' />

        {/* <h1 className="md:w-2/3 lg:w-3/4 font-thin md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
          CHOOSE <span className="font-medium ">us</span>
        </h1> */}
        <p className="md:w-1/3 lg:w-1/4 md:text-[13px] lg:text-base font-thin md:leading-[20px] lg:leading-[24px]">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>
      </div>
      ) : ''}
      
      <div className="lg:h-full flex justify-between gap-5 lg:gap-4 lg:mt-4">
        {isMediumScreen && <WhyUs array={advantages} />}
        <FormChooseUs />
      </div>
    </section>
  );
}
