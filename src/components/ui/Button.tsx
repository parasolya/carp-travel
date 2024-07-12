import { ButtonProp } from '@/@types';
import clsx from 'clsx';

const Button: React.FC<ButtonProp> = ({
  variant,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'text-white uppercase outline-none shadow-none cursor-pointer hover:underline underline-offset-4 transition',
        variant === 'slider' && 'font-thin text-2xl decoration-1',
        variant === 'form' && 'text-4xl  md:text-3xl lg:text-3xl decoration-2'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
