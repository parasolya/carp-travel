'use client';
import React, { useEffect, useState } from 'react';
import FormChooseUs from '../components/FormChooseUs';
import WhyUs from '@/components/WhyUs';
import advantages from '../../shared/advantages';

import { useMediaQuery } from 'react-responsive';

const Career: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const isMobileScreen = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    setIsMobile(isMobileScreen);
  }, [isMobileScreen]);

  return (
    <section
      id="career"
      className={`md:h-screen md:px-8 md:py-16 lg:px-16 lg:py-16  bg-cover bg-center bg-no-repeat ${
        isMobile ? '' : 'bg-careerTab lg:bg-careerDesk'
      }`}
    >
      <div className="relative w-full h-full md:flex justify-between gap-5 lg:gap-0">
        <div
          className={`w-full md:w-1/3 lg:w-1/2   bg-cover bg-center bg-no-repeat
           ${isMobile ? 'bg-careerMob' : ''}
           `}
        >
          <div className="w-full md:w-[300%] lg:w-[200%] lg:mr-20 md:flex justify-between px-5 pt-16 md:px-0 md:pt-0  lg:mb-8">
            <h1 className="w-full md:w-2/3 lg:w-3/4  mb-8 md:mb-0 font-thin text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
              CHOOSE <span className="font-medium ">us</span>
            </h1>

            <div className="w-full md:w-1/3 lg:w-1/4 lg:pt-2 flex justify-end">
              <p className="w-3/5 md:w-full md:pl-2 md:text-[13px] lg:text-base font-thin md:leading-[20px] lg:leading-[24px]">
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
            </div>
          </div>

          <WhyUs array={advantages} />
        </div>

        <FormChooseUs mobileScreen={isMobile} />
      </div>
    </section>
  );
};

export default Career;
