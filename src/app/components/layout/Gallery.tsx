'use client' 

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Carousel from './Carousel';
import Title from './Title';
import GalleryList from './GalleryList';

const Gallery: React.FC = () => {

  
  const [isMobile, setIsMobile] = useState<boolean | null>(null); 

  const isMobileScreen = useMediaQuery({
    query: '(max-width: 767px)',
  }); 

  useEffect(() => {
    setIsMobile(isMobileScreen);
  }, [isMobileScreen]);

  return (
    <section id='gallery' className="box-border md:h-screen mx-auto px-5 py-16 md:px-8 md:pt-32 md:pb-16 lg:px-20 lg:py-16 bg-cover bg-center" style={{backgroundImage: 'url(/bg-gallery.png)'}}>
    <div className='flex justify-start md:justify-center lg:justify-start mb-8 md:mb-20 lg:mb-8'>
      <Title firstWords='OUR' secondWords='GALLERY' />
    </div>
    { isMobile ? <GalleryList /> : <Carousel />}  
  </section>
  )
}

export default Gallery
