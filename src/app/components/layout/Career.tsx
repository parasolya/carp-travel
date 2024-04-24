'use client';
import React from 'react';
import FormChooseUs from './FormChooseUs';
import WhyUs from './WhyUs';
import advantages from '../../../../shared/advantages';

export default function Career() {
  return (
    <section
      id="career"
      className="h-screen bg-cover bg-center md:px-8 md:py-16 lg:px-20 lg:py-16 flex flex-col justify-between"
      style={{ backgroundImage: 'url(/bg-career.png)' }}
    >
      <div className="flex items-center md:mb-8 lg:mb-4">
        <h1 className="md:w-2/3 lg:w-3/4 font-thin md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
          CHOOSE <span className="font-medium ">us</span>
        </h1>
        <p className="md:w-1/3 lg:w-1/4 md:text-sm lg:text-base font-thin">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>
      </div>
      <div className="lg:h-full lg:grid grid-cols-2 gap-4 lg:mt-6">
        <WhyUs array={advantages} />
        <FormChooseUs />
      </div>
    </section>
  );
}
