// 'use client'
import React from 'react';
// import Carus from './Carus';
import Carousel from './Carousel';

function Gallery() {
  return (
    <section id='gallery' className="box-border md:h-screen mx-auto px-5 py-16 md:px-8 md:py-16 lg:px-20 lg:py-16 bg-cover bg-center" style={{backgroundImage: 'url(/bg-gallery.png)'}}>
    <h1 className='ml-4 font-thin text-[98px] tracking-tight'>OUR <span className='font-medium'>GALLERY</span></h1>
    
    <Carousel />  
  </section>
  )
}

export default Gallery
