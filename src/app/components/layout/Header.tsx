'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';

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
          <div className="absolute w-full flex justify-between box-border mx-auto px-8 pt-6 lg:px-20">
            <Logo />
            <nav className="flex items-end lg:items-center justify-between gap-6 lg:gap-8">
              <Link
                className="cursor-pointer"
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
              className="cursor-pointer"
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
              className="cursor-pointer"
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
              className="cursor-pointer"
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
              className="cursor-pointer"
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
              <Logo />

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
                    className="pointer-events-auto uppercase"
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
                  className="text-xl cursor-pointer"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  About
                </Link>
                <Link
                  className="text-xl cursor-pointer"
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Services
                </Link>
                <Link
                  className="text-xl cursor-pointer"
                  activeClass="active"
                  to="career"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Career
                </Link>
                <Link
                  className="text-xl cursor-pointer"
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Gallery
                </Link>
                <Link
                  className="text-xl cursor-pointer"
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
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
}
