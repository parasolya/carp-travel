'use client';

import { useEffect, useState } from 'react';
import Logo from '../components/ui/Logo';
import NavMenu from '@/components/NavMenu';
import BurgerMenu from '@/components/BurgerMenu';
import Button from '@/components/ui/Button';

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
              <Button
                type="button"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                menu
              </Button>
            </div>
          )}
        </div>

        {isMenuToggled && (
          <BurgerMenu className="md:hidden" handleMenuToggled={onMenuToggled} />
        )}
      </header>
    </>
  );
};

export default Header;
