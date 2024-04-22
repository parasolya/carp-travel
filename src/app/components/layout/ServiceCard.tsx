'use client';

import { useState } from 'react';
import Image from 'next/image';
import services from '../../../../shared/services';

// interface ServiceCardProps {
//   id: number;
//   number: string;
//   month: string;
//   src: string;
//   alt: string;
//   slogan: string;
//   description: string;
// }

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

export default function ServiceCard({
  elementNumber
  // id,
  // number,
  // month,
  // src,
  // alt,
  // slogan,
  // description,
}: ServiceCardProps) {

  const [selectedIndex, setSelectedIndex] = useState<number | 0 >(elementNumber);

  const [selectedOfferIndex, setSelectedOfferIndex] = useState<number | null>(
    null
  );

  const handleOfferClick = (index: number) => {
    setSelectedOfferIndex(index);
    setSelectedIndex(index);
  };

  const selectedService = services[selectedIndex];

  return (
    <div>
      <div>
        <h1>
          WE <span>OFFER</span>
        </h1>
        <p>{elementNumber}</p>
        <p>
          {`${selectedService.number}/`}
          <span>{selectedService.month}</span>
        </p>
      </div>

      <div>
        <Image src={selectedService.src} alt={selectedService.alt} width={500} height={300} />
      </div>
      <ul>
        {offers.map((offer, index) => (
          <li
            key={index}
            onClick={() => handleOfferClick(index)}
            style={{
              backgroundColor:
                index === selectedOfferIndex ? 'yellow' : 'transparent',
            }}
          >
            {offer}
            {index === selectedOfferIndex && <span>{selectedService.slogan}</span>}
          </li>
        ))}
      </ul>

      <div>
        <p>{selectedService.description}</p>
      </div>
    </div>
  );
}

// ATVs Traveling
