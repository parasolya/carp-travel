'use client';

import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import services from '../../../../shared/services';
import Title from './Title';

interface ServiceCardProps {
  elementNumber: number;
}

const offers: string[] = [
  'ATVs Traveling',
  'Rock climbing',
  'Hot air ballooning',
  'Skydiving',
  'Rafting',
];

export default function Card2({ elementNumber }: ServiceCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | 0>(elementNumber);
  const [selectedOfferIndex, setSelectedOfferIndex] = useState<number | null>(
    elementNumber
  );
  const selectedService = services[selectedIndex];
  const handleOfferClick = (index: number) => {
    setSelectedOfferIndex(index);
    setSelectedIndex(index);
  };

  return (
    <div
      className="box-border h-full w-full px-5 py-16 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-cover bg-center "
      style={{
        backgroundImage: `url(${selectedService.backgroundImage})`,
      }}
    >
      <div className="w-full md:flex items-center md:mb-8 lg:mb-4">
        <h1 className="md:w-2/3 lg:w-1/2 mb-4 md:mb-0 font-thin text-4xl md:text-7xl lg:text-8xl tracking-tight leading-none md:leading-[80px] lg:leading-[110px] uppercase">
          WE <span className="font-medium">OFFER</span>
        </h1>

        <p className="md:w-1/3 mb-4 md:mb-0 text-end md:text-start font-thin text-4xl md:text-7xl lg:text-8xl tracking-tight md:leading-[80px] lg:leading-[110px]">
          {`${selectedService.number}/`}
          <span className="filter brightness-50">{selectedService.month}</span>
        </p>
      </div>
      <div className="h-full flex flex-col md:flex-row justify-between gap-16 md:gap-4 ">
        <div className="md:h-[370px] lg:h-[429px] w-full md:w-2/3 lg:w-2/4 ">
          <img
            className={`h-full w-full object-cover `}
            src={selectedService.src}
            alt={selectedService.alt}
          />
        </div>
        <div className="relative md:h-[370px] lg:h-[429px] w-full md:w-1/3 lg:w-2/4 flex flex-col justify-between lg:gap-4">
          <div className="h-[160px]  md:h-[185px] w-full">
            <div className="swiper-pagination w-full flex h-full flex-col gap-1 md:gap-0 lg:gap-6">
              {offers.map((offer, index) => (
                <div
                  key={nanoid()}
                  className="lg:flex lg:items-center lg:justify-between"
                >
                  <div
                    className=""
                    key={index}
                    onClick={() => {
                      handleOfferClick(index);
                    }}
                  >
                    <div className="flex md:mb-2 lg:mb-0">
                      {index === selectedOfferIndex && (
                        <div className="mr-2 text-xs">◆</div>
                      )}
                      <div
                        className={`md:pr-6 text-start md:text-xl lg:text-2xl md:line-18 lg:line-24 md:leading-[22px] lg:leading-[24px] uppercase filter ${
                          index === selectedOfferIndex
                            ? 'brightness-100'
                            : 'brightness-50'
                        }`}
                        style={{
                          fontWeight: index === selectedOfferIndex ? 500 : 200,
                        }}
                      >
                        {offer}
                      </div>
                    </div>
                  </div>

                  <div className="w-full absolute text-end md:text-start  -top-14 right-0 bottom-auto md:top-auto md:right-auto md:bottom-40 lg:static lg:w-1/2  box-border lg:pl-4 md:text-sm  font-thin lg:text-xs">
                    {index === selectedOfferIndex && (
                      <p>{selectedService.slogan}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:h-1/3 box-border lg:pl-4 lg:w-1/2 lg:ml-auto flex flex-col justify-end">
            <p className="md:text-sm  md:-tracking-[0.01em] font-thin lg:leading-[24px]">
              {selectedService.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
