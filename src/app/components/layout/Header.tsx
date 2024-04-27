'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from './icons/Logo';

export default function Header() {
  // const [isCloseMenu, setIsCloseMenu] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(true);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuVisible(window.innerWidth <= 480);
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
      <header className="box-border w-full absolute flex items-center justify-between bg-primary text-white">
        <div className={!isMobileMenuVisible ? 'visible' : 'hidden'}>
          <Link
            className="text-secondary font-bold cursor-pointer"
            // href={'/#hero'}
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Logo />
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

        {/* MOBILE MENU MODAL */}

        {!isMenuToggled && (
          <div
            id="navbar"
            className={`w-full absolute top-0 left-1/2 transform -translate-x-1/2 z-30  text-center ${isMobileMenuVisible ? 'visible' : 'hidden'}`}
          >
            <div className="box-border px-16 pt-18 mx-auto">
              <div
                className="{absolute flex justify-between w-[320px] h-[28px]}"
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
          </div>
        )}

        {isMenuToggled && (
          <div
            id="navbar"
            className="w-screen h-screen absolute top-0 left-1/2 transform -translate-x-1/2 z-30 bg-black text-center"
          >
            <div className="box-border px-16 pt-18 mx-auto">
              <div
                className="{absolute flex justify-between w-[320px] h-[28px]}"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Logo />

                <div>
                  <div>
                    <button
                      className="pointer-events-auto"
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* MENU ITEMS */}

            <div
              className="h-[493px] w-full flex flex-col items-center mb-0 text-center"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <div className="flex flex-col gap-4 m-auto  max-w-[121px] mb-0 pt-[62px] h-[264px]  bg-transparent">
                <Link
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
