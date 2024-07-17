import React from 'react';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';

interface Advantage {
  advantage: string;
  description: string;
}

function WhyUs({ array }: { array: Advantage[] }) {
  return (
    <div className="mb-16  md:mb-0 lg:mr-4">
      <h2 className="lg:w-1/2 text-end font-extralight text-4xl md:text-xl lg:text-4xl uppercase md:mb-6 lg:mb-10">
        Why us ?
      </h2>
      <ul className="w-2/3 md:w-full mt-12 md:mt-0 list-none lg:flex flex-col justify-between lg:gap-4 text-end">
        {array.map((el) => (
          <li
            key={nanoid()}
            className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-4 md:mb-4 lg:mb-0"
          >
            <div className="md:leading-5 lg:leading-6">{el.advantage}</div>
            <div className="pl-2 md:pl-0 md:ml-1 lg:ml-0 lg:text-start text-[12px] md:text-xs font-thin md:leading-[20px]  lg:leading-6">
              {el.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhyUs;
