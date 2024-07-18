import { NavMenyProps } from '@/@types';
import { navData } from '@/data';
import { Link } from 'react-scroll';

const NavMenu: React.FC<NavMenyProps> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex items-end lg:items-center justify-between gap-6 lg:gap-8">
        {navData.map(({ id, to, section }) => (
          <li key={id}>
            <Link
              className='outline-none shadow-none cursor-pointer  hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150'
              activeClass="active"
              to={to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              tabIndex={0}
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
