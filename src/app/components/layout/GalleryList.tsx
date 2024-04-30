'use client';

import React from 'react';

export default function GalleryList() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-[187px]">
        <img
          className="w-full h-full object-cover"
          src="/gallery-1.png"
          alt="slide_image"
        />
      </div>
      <div className="w-full h-[187px]">
        <img
          className="w-full h-full object-cover"
          src="/gallery-2.png"
          alt="slide_image"
        />
      </div>
      <div className="w-full h-[187px]">
        <img
          className="w-full h-full object-cover"
          src="/gallery-3.png"
          alt="slide_image"
        />
      </div>
    </div>
  );
}
