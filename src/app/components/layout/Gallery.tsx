// 'use client'
import React from 'react';
// import Carus from './Carus';
import Carousel from './Carousel';

function Gallery() {
  return (
    <section id='gallery' className="h-screen py-20 px-4 flex-col items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/bg-gallery.png)'}}>
    <h1 className='ml-4 font-thin text-7xl tracking-tight'>OUR <span className='font-medium'>GALLERY</span></h1>
    
    <Carousel />  
  </section>
  )
}

export default Gallery
