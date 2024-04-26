import React from 'react';

type TitleProps = {
  firstWords: string;
  secondWords: string;
};

const Title: React.FC<TitleProps> = ({ firstWords, secondWords }) => {
  return (
    <>
      <h1 className="md:w-2/3 lg:w-3/4 font-thin text-4xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
        {firstWords}{' '}
        <span className="font-medium ">{secondWords}</span>
      </h1>
    </>
  );
};

export default Title;
