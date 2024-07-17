import { TextareaProps } from '@/@types';
import { forwardRef } from 'react';

const Textarea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = ({
  id,
  label,
  placeholder,
  type,
  className,
  classNameLabel,
  ...rest
},
ref) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`block font-thin text-[12px] md:text-xs leading-6 tracking-widest tracking-6 mb-1 lg:mb-2 ${classNameLabel}`}
      >
        Message
      </label>
      <textarea
        className={`block resize-none w-full py-1 md:py-2 px-2 font-extralight text-xl leading-6 bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer focus:outline-none hover:outline-none transition-colors duration-300 ease-out ${className}`}
        id={id}
        autoComplete={id}
        placeholder={placeholder}
        {...rest}
      ></textarea>
    </>
  );
};

export default forwardRef(Textarea);
