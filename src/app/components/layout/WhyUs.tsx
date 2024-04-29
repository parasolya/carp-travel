import React from 'react';
import { nanoid } from 'nanoid';

interface Advantage {
  advantage: string;
  description: string;
}

function WhyUs({ array }: { array: Advantage[] }) {
  return (
    <div className="lg:h-full md:w-1/3 lg:w-1/2">
      <h2 className='lg:w-1/2 md:text-end font-extralight md:text-xl lg:text-4xl uppercase md:mb-6 lg:mb-10'>Why us ?</h2>
      <ul className="list-none lg:flex flex-col justify-between lg:gap-4 text-end">
        {array.map((el) => (
          <li key={nanoid()} className="grid lg:grid-cols-2 md:gap-2 lg:gap-4 md:mb-4 lg:mb-0">
            <div className='md:leading-5 lg:leading-6'>{el.advantage}</div>
            <div className="md:ml-1 lg:ml-0 lg:text-start md:text-xs font-thin md:leading-[20px]  lg:leading-6">
              {el.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhyUs;
