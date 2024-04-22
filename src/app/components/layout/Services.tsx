// 'use client'
import { nanoid } from 'nanoid';
import ServiceCard from './ServiceCard';
import services from '../../../../shared/services';

const count = 5; // або будь-яке інше число, яке ви хочете використовувати

  // Створіть масив чисел від 1 до count
  const numbers = Array.from({ length: count }, (_, index) => index + 1);

function Services() {
  return (
    <section
      id="services"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg-services-1.png)' }}
    >
      <h1>Services</h1>
      {numbers.map((number, index) => (
        <ServiceCard key={nanoid()} elementNumber={index} />
      ))}



      {/* {services.map((el) => (
        <ServiceCard
          key={el.id}
          id={el.id}
          number={el.number}
          month={el.month}
          src={el.src}
          alt={el.alt}
          slogan={el.slogan}
          description={el.description}
        />
      ))} */}
    </section>
  );
}

export default Services;
