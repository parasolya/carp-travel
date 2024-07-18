import Link from 'next/link';
import LogoIcon from '/public/icons/logo.svg';

const Logo = () => {
  return (
    <Link className="w-[61px] h-[34px] outline-none shadow-none cursor-pointer" href="/" aria-label="home">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
