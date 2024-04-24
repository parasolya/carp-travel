import React from 'react';
import { nanoid } from 'nanoid';

interface Advantage {
  advantage: string;
  description: string;
}

function WhyUs({ array }: { array: Advantage[] }) {
  return (
    <div className="lg:h-full">
      <h2 className='lg:w-1/2 lg:text-end font-extralight md:text-xl lg:text-4xl uppercase lg:mb-10'>Why us ?</h2>
      <ul className="list-none lg:flex flex-col justify-between gap-8">
        {array.map((el) => (
          <li key={nanoid()} className="lg:grid grid-cols-2 gap-4">
            <div className='text-end'>{el.advantage}</div>
            <div className="md:text-sm  font-thin lg:text-xs">
              {el.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhyUs;
