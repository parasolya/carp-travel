'use client'

import Slider from '../components/Slider';

function Services() {
  return (
    <section id="services" className="md:h-screen box-border">
      <h1 className="hidden">Services</h1>
      <Slider count={5} />  
    </section>
  );
}

export default Services;
