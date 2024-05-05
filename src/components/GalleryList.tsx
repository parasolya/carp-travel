'use client';

import Image from 'next/image';
import React from 'react';

const GalleryList: React.FC = () => {

  return (
    <ul className="list-none flex flex-col gap-6 items-center">
      <li>
        <Image src="/gallery-1.png" alt="lake" width={280} height={187} />
      </li>
      <li>
        <Image src="/gallery-2.png" alt="forest" width={280} height={187} />
      </li>
      <li>
        <Image src="/gallery-3.png" alt="mountain" width={280} height={187} />
      </li>
    </ul>
  );
};

export default GalleryList;
