import React from 'react';

type TitleProps = {
  firstWords: string;
  secondWords: string;
};

const Title: React.FC<TitleProps> = ({ firstWords, secondWords }) => {
  return (
    <>
      <h1 className="font-thin text-[40px] md:text-[67px] lg:text-[98px] tracking-tight leading-none uppercase">
        {firstWords}{' '}
        <span className="font-medium ">{secondWords}</span>
      </h1>
    </>
  );
};

export default Title;
