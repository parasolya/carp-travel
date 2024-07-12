import { LinkButtonProp } from '@/@types';
import clsx from 'clsx';
import { Link } from 'react-scroll';

const LinkButton: React.FC<LinkButtonProp> = ({
  variant,
  to,
  children,
  className,
}) => {
  const elementBefore =
    'before:absolute before:left-0 before:z-10 before:block before:w-[35px] before:h-[50px] before:content-[url("/icons/before-sm.svg")] md:before:w-[42px]  md:before:h-[53px] md:before:content-[url("/icons/before-md.svg")] lg:before:w-[44px]  lg:before:h-[71px] lg:before:content-[url("/icons/before-lg.svg")]';

  const elementAfter =
    'after:absolute after:right-0 after:z-10 after:block after:w-[35px] after:h-[50px] after:content-[url("/icons/after-sm.svg")] md:after:w-[42px]  md:after:h-[53px] md:after:content-[url("/icons/after-md.svg")] lg:after:w-[44px]  lg:after:h-[71px] lg:after:content-[url("/icons/after-lg.svg")]';

  return (
    <Link
      className={clsx(
        'flex items-center justify-center cursor-pointer',
        variant === 'main' &&
          `relative h-[53px] md:h-[50px] lg:h-[71px] bg-white bg-opacity-10 hover:bg-opacity-20 transition ${elementBefore} ${elementAfter}`,
        className
      )}
      to={to}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
