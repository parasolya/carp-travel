'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Title from '../components/Title';

const About: React.FC = () => {
  const [isTablet, setIsTablet] = useState<boolean | null>(null);

  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });

  useEffect(() => {
    setIsTablet(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <section
      id="about"
      className="box-border md:h-screen mx-auto px-5 py-16 md:px-8 md:py-16 lg:px-20 lg:py-16  flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-aboutMob sm:bg-aboutTab lg:bg-aboutDesk"
    >
      <div className="w-full h-full">
        <div className="md:flex justify-between md:mb-6 lg:mb-0">
          <div className="md:w-2/3 lg:w-1/2 md:flex flex-col justify-between">
            <div className="lg:w-3/4 mb-4">
              <Title firstWords="WHO" secondWords="WE ARE" />
            </div>

            {isTablet && (
              <div className="w-full  flex justify-end md:justify-start">
                <div className="mt-8 md:mt-0">
                  <p className="uppercase">From vacationers</p>
                  <p className="text-end uppercase">to active travelers</p>
                  <p className="text-sm lg:text-base font-thin">
                    we have a tour for everyone.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="md:w-1/3 lg:w-1/2 lg:mb-8 md:pl-10 lg:pl-0">
            <div className="lg:w-1/2">
              <p className="w-2/3 md:w-full mb-4 text-sm lg:text-base font-thin">
                <span className="font-normal">a team of enthusiasts</span> who
                are fully committed to the mission of creating unforgettable and
                extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>
              <p className="w-2/3 md:w-full text-sm lg:text-base font-thin">
                <span className="font-normal">We believe</span> that nature has
                the power to inspire, strengthen character and provide new
                perspectives. Therefore, each of our tours is aimed at unlocking
                your potential, enriching your spiritual world and creating
                unforgettable memories.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full  flex justify-end">
          <div className="mt-8 md:mt-0">
            <p className="uppercase">From vacationers</p>
            <p className="text-end uppercase">to active travelers</p>
            <p className="text-sm lg:text-base font-thin">
              we have a tour for everyone.
            </p>
          </div>
        </div>

        <div className=" lg:w-full md:flex justify-center md:justify-end lg:justify-between">
          <div className="md:w-2/3 lg:w-1/2">
            <p className=" mt-8 md:mt-0 text-sm lg:text-base font-thin">
              <span className="font-normal">We use methods</span> that are
              time-tested and proven. Our expert guides with in-depth knowledge
              of the Carpathian landscapes lead you safely through the mysteries
              of these mountains.{' '}
            </p>
          </div>
          {!isTablet && (
            <div className="hidden lg:visible lg:w-1/2  md:flex justify-end">
              <div className="lg:w-1/2 mt-8 md:mt-0">
                <p className="uppercase">From vacationers</p>
                <p className="text-end uppercase">to active travelers</p>
                <p className="text-sm lg:text-base font-thin">
                  we have a tour for everyone.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
