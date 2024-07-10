'use client';

import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="box-border lg:h-screen mx-auto px-5 pt-28 pb-16 md:px-8 md:pb-16 pt-27 md:pt-36 lg:px-20 lg:pb-16  lg:pt-26 bg-cover bg-center bg-no-repeat bg-heroMob sm:bg-heroTab lg:bg-heroDesk"
    >
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col md:flex-row justify-end mb-6 md:mb-0">
          <div className="order-2 md:order-1 mt-6 md:-mt-1 w-2/3">
            <h1 className="font-medium text-5xl md:text-[67px] lg:text-[98px] md:tracking-tight leading-tight tracking-tight uppercase">
              Uncover <span className="font-thin">Carpathian’s Secrets</span>
            </h1>
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/3 flex flex-col items-end  ">
            <h2 className="font-medium text-[37px] md:text-7xl lg:text-[98px] leading-none uppercase">
              7{' '}
              <span className="font-thin md:tracking-tight lg:tracking-[0.11em]">
                DAYS
              </span>
            </h2>
            <p className="font-thin tracking-[0.6em] md:tracking-[1.5em] lg:tracking-[2.3em] md:-mr-4">
              JOURNEY
            </p>
          </div>
        </div>

        <div className="md:flex-grow flex flex-col gap-8 md:flex-row justify-between">
          <div className="w-2/3 md:w-1/3 md:flex flex-col justify-end lg:w-2/3">
            <p className="text-xs font-thin md:leading-5 lg:leading-6 md:tracking-widest">
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
              to="contacts"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className="relative w-full h-[53px] md:h-[50px] lg:h-[71px] flex bg-white bg-opacity-10 focus:bg-opacity-20 hover:bg-opacity-20 hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150">
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
};

export default Hero;
