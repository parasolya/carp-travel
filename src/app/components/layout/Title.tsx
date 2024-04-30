import React from 'react';

type TitleProps = {
  firstWords: string;
  secondWords: string;
};

const Title: React.FC<TitleProps> = ({ firstWords, secondWords }) => {
  return (
    <>
      <h1 className="font-thin text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
        {firstWords}{' '}
        <span className="font-medium ">{secondWords}</span>
      </h1>
    </>
  );
};

export default Title;
