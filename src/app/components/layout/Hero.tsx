// 'use client'
import React from 'react';

export default function Hero() {
  return (
    <section  id="hero" className="px-20 h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/bg-hero.png)'}}>
      <h1>Uncover Carpathian’s Secrets</h1>
      <h2 className='uppercase'>
        <span>7</span>&nbsp;Days<br/><span>Journey</span>
      </h2>
      <p>
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>
      <p>
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <button className='bg-primary text-white items-center uppercase'>Join now</button>      
    </section>
  );
}
