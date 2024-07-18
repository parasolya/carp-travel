'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../components/ui/Logo';
import NavMenu from '@/components/NavMenu';
import { NavModal } from '@/components/NavModal';

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsMenuToggled(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onMenuToggled = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <>
      <header className="absolute left-0 top-9 md:top-6 z-20 w-full bg-transparent">
        <div className="container flex justify-between items-center">
          <Logo />

          <NavMenu className="notMd:hidden" />

          {!isMenuToggled && (
            <div id="navbar" className="md:hidden">
              <button
                className="pointer-events-auto uppercase hover:underline transition"
                type="button"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                menu
              </button>
            </div>
          )}
        </div>

        {isMenuToggled && <NavModal handleMenuToggled={onMenuToggled} />}
      </header>
    </>
  );
};

export default Header;
