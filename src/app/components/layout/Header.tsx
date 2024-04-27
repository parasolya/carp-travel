'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import Logo from './icons/Logo';

export default function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuVisible(window.innerWidth <= 767);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

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

  return (
    <>
      <header className="relative bg-yellow-500">
        {!isMobileMenuVisible && (
          <div className="absolute bg-primary flex items-center justify-between">
            <Link
              className="text-secondary font-bold"
              // href={'/#hero'}
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img src="/logo.png" width={61} height={34} alt="logo" />
            </Link>
            <nav className="flex items-center justify-between gap-4">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Services
              </Link>
              <Link
                activeClass="active"
                to="career"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Career
              </Link>
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Gallery
              </Link>
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contacts
              </Link>
            </nav>
          </div>
        )}

        {/* MOBILE MENU MODAL */}

        {!isMenuToggled && isMobileMenuVisible && (
          <div
            id="navbar"
            className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 z-30  box-border pt-8 px-5"
          >            
              <div
                className="w-full flex justify-between items-center"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <img src="/logo.png" width={61} height={34} alt="logo" />

                <div>
                  <div>
                    <button
                      className="pointer-events-auto uppercase"
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      menu
                    </button>
                  </div>
                </div>
              </div>
           
          </div>
        )}
      </header>
    </>
  );
}
