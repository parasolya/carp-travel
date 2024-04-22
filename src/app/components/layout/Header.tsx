'use client'
// import Link from 'next/link';
import { Link } from 'react-scroll';
import Logo from './icons/Logo';

export default function Header() {
  return (
    <>
      <header className="absolute flex items-center justify-between bg-primary text-white">
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
      </header>      
    </>
  );
}
