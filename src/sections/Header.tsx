'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../components/ui/Logo';
import NavMenu from '@/components/NavMenu';

const Header: React.FC = () => {
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
      <header className="absolute left-0 top-6 z-20 w-full bg-transparent">
        {!isMobileMenuVisible && (
          <div className="container flex justify-between items-center">
            <Logo />

            <NavMenu />
          </div>
        )}

        {/* MOBILE HEADER */}

        {!isMenuToggled && isMobileMenuVisible && (
          <div
            id="navbar"
            className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 z-30  box-border pt-8 px-5"
          >
            <div
              className="w-full flex justify-between items-center"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Link
                className="cursor-pointer outline-none shadow-none"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                tabIndex={0}
              >
                <Logo />
              </Link>

              <div>
                <div>
                  <button
                    className="pointer-events-auto uppercase hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                    type="button"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE MENU MODAL */}

        {isMenuToggled && isMobileMenuVisible && (
          <div
            id="navbar"
            className="w-full h-screen absolute top-0 left-1/2 transform -translate-x-1/2 z-30  box-border pt-8 px-5 bg-gray-900 bg-opacity-90"
          >
            <div
              className="w-full flex justify-end items-center"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <div>
                <div>
                  <button
                    className="pointer-events-auto uppercase hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                    type="button"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>

            {/* MENU ITEMS */}

            <div
              className="h-full w-full flex flex-col items-center text-center"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <div className="flex flex-col gap-12 pt-32">
                <Link
                  className="text-xl cursor-pointer outline-none shadow-none hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  tabIndex={0}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  About
                </Link>
                <Link
                  className="text-xl cursor-pointer outline-none shadow-none hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  tabIndex={0}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Services
                </Link>
                <Link
                  className="text-xl cursor-pointer outline-none shadow-none hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                  activeClass="active"
                  to="career"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  tabIndex={0}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Career
                </Link>
                <Link
                  className="text-xl cursor-pointer outline-none shadow-none hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  tabIndex={0}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Gallery
                </Link>
                <Link
                  className="text-xl cursor-pointer outline-none shadow-none hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  tabIndex={0}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
