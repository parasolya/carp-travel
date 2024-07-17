'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import GallerySlider from '@/components/GallerySlider';
import Title from '../components/Title';
import GalleryList from '../components/GalleryList';
import gallery from '../data/gallery.json';

const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const isMobileScreen = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    setIsMobile(isMobileScreen);
  }, [isMobileScreen]);

  return (
    <section
      id="gallery"
      className="section bg-cover bg-center bg-no-repeat bg-galleryMob sm:bg-galleryTab lg:bg-galleryDesk"
    >
      <div className="container">
      <div className="max-w-[480px] md:max-w-[768px] lg:max-w-[1280px] mx-auto">
        <div className="flex justify-start md:justify-center lg:justify-start mb-8 md:mb-20 lg:mb-8">
          <Title
            firstWords={gallery.title.firstWords}
            secondWords={gallery.title.secondWords}
          />
        </div>

        {isMobile ? <GalleryList /> : <GallerySlider />}
      </div>
      </div>
    </section>
  );
};

export default Gallery;
