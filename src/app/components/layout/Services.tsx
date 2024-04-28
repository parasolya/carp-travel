'use client'

import Slider from './Slider';

// const count = 5; 

  // Створіть масив чисел від 1 до count
  // const numbers = Array.from({ length: count }, (_, index) => index + 1);

function Services() {
  return (
    <section id="services" className="h-screen box-border">
      <h1 className="hidden">Services</h1>
      <Slider count={5} />  
    </section>
  );
}

export default Services;
