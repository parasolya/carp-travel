'use client';

import LinkButton from '@/components/ui/LinkButton';
import { heroData } from '@/data';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="section box-border pt-[105px] md:pt-[122px] lg:pt-[130px] bg-cover bg-center bg-no-repeat bg-heroMob sm:bg-heroTab lg:bg-heroDesk"
    >
      <div className="container flex flex-col">
        <div className="w-full flex flex-col md:flex-row justify-end md:justify-between mb-6 md:mb-0">
          <div className="order-2 md:order-1 mt-6 md:-mt-1">
            <h1 className="font-medium text-5xl md:text-[67px] lg:text-[98px] md:tracking-tight leading-tight tracking-tight uppercase">
              Uncover <span className="font-thin">Carpathian’s Secrets</span>
            </h1>
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/3 text-right">
            <h2 className="font-medium text-[37px] md:text-7xl lg:text-[98px] leading-none uppercase">
              7
              <span className="font-thin md:tracking-wider lg:tracking-normal lg:ml-2">
                DAYS
              </span>
            </h2>

            <p className="font-thin tracking-[0.5em] md:tracking-[1.5em] lg:tracking-[1.9em] -mr-1 md:-mr-4 lg:-mr-5">
              JOURNEY
            </p>
          </div>
        </div>

        <div className="md:flex-grow flex flex-col gap-8 md:flex-row justify-between lg:-mt-[60px]">
          <div className="w-2/3 md:w-1/3 md:flex flex-col justify-end lg:w-2/3">
            <p className="text-xs font-thin md:leading-5 lg:leading-6 md:tracking-widest">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>

          <div className="md:w-[230px] lg:w-[294px] flex flex-col md:justify-between gap-8">
            <p className="text-sm lg:text-base font-thin">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>

            <LinkButton
              className="w-full md:w-[230px] lg:w-[293px] font-bold text-lg lg:text-xl uppercase"
              variant="main"
              to="contacts"
            >
              {heroData.textButton}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
