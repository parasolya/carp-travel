'use client';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import services from '../../../../shared/services';

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

export default function ServiceCard({ elementNumber }: ServiceCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | 0>(elementNumber);

  const [selectedOfferIndex, setSelectedOfferIndex] = useState<number | null>(
    elementNumber
  );

  const selectedService = services[selectedIndex];

  const [backgroundImage, setBackgroundImage] = useState(
    selectedService.backgroundImage
  );

  const handleOfferClick = (index: number) => {
    setSelectedOfferIndex(index);
    setSelectedIndex(index);
    // Перевірка, чи backgroundImage не було змінено раніше
    if (backgroundImage === selectedService.backgroundImage) {
      setBackgroundImage(selectedService.backgroundImage);
    }
  };

  return (
    <div
      className="bg-cover bg-center h-full w-full md:px-8 md:py-16 lg:px-20 lg:py-20 pt-14 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex items-center md:mb-8 lg:mb-4">
        <h1 className="md:w-2/3 lg:w-1/2 font-thin md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
          WE <span className="font-medium">OFFER</span>
        </h1>
        <p className="md:w-1/3 lg:ml-4 font-thin md:text-7xl lg:text-8xl tracking-tight">
          {`${selectedService.number}/`}
          <span className="font-thin filter brightness-50">
            {selectedService.month}
          </span>
        </p>
      </div>
      <div className="flex justify-between gap-4 h-full">
        <div className="md:w-2/3 lg:w-2/4 h-full">
          <img
            className="w-full object-cover h-full"
            src={selectedService.src}
            alt={selectedService.alt}
          />
        </div>
        <div className="relative md:w-1/3 lg:w-2/4 flex flex-col justify-between">
          <div className="flex flex-col lg:justify-between h-full">
            {offers.map((offer, index) => (
              <div key={nanoid()} className='lg:flex items-center justify-between'>
                <div
                  className="lg:w-1/2 flex"
                  key={index}
                  onClick={() => {
                    handleOfferClick(index);
                  }}
                  >
                  <div className=" flex items-center md:mb-2 lg:mb-0">
                    {index === selectedOfferIndex && (
                      <div className="mr-2 text-xs">◆</div>
                    )}
                    <div
                      className={`md:text-xl lg:text-3xl md:line-18 lg:line-24 uppercase filter ${
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
                <div className="absolute bottom-40 lg:static lg:w-1/2 items-center md:text-sm  font-thin lg:text-xs">
                  {index === selectedOfferIndex && (
                    <p>{selectedService.slogan}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 md:text-sm lg:text-base font-thin lg:ml-auto lg:mt-2">
            <p>{selectedService.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ATVs Traveling
