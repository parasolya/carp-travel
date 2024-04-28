// 'use client'
import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="box-border md:h-screen mx-auto px-5 py-16 md:px-8 md:py-16 lg:px-20 lg:py-16  flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg-about.png)' }}
    >
      <h1 className="md:w-2/3 lg:w-3/4 mb-4 font-thin text-4xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
        WHO<span className="font-medium ">WE ARE</span>
      </h1>
      <div className=''>
      <p className="w-2/3 mb-4 text-sm lg:text-base font-thin">
        <span className='font-normal'>a team of enthusiasts</span> who are fully committed to the
        mission of creating unforgettable and extraordinary trips to the most
        beautiful parts of the Carpathians. Our goal is not just to show you the
        natural wonders of the mountains, but to provide you with a deep
        immersion in their magical atmosphere.
      </p>
      <p className="w-2/3 text-sm lg:text-base font-thin">
        <span className='font-normal'>We believe</span> that nature has the power to inspire, strengthen
        character and provide new perspectives. Therefore, each of our tours is
        aimed at unlocking your potential, enriching your spiritual world and
        creating unforgettable memories.
      </p>
      </div>
     <div className='w-full  flex justify-end'>
      <div className='mt-8 md:mt-0'>
        
          <p className='uppercase'>From vacationers</p>
          <p className='text-end uppercase'>to active travelers</p>
          <p className="text-sm lg:text-base font-thin">we have a tour for everyone.
        </p>
      </div>
      </div>
      <div className='mx-auto'>
      <p className='mt-8 md:mt-0 text-sm lg:text-base font-thin'>
        <span className='font-normal'>We use methods</span> that are time-tested and proven. Our expert
        guides with in-depth knowledge of the Carpathian landscapes lead you
        safely through the mysteries of these mountains.{' '}
      </p>
      </div>
    </section>
  );
}

export default About;
