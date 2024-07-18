import { NavModalProps } from "@/@types"
import { Link } from "react-scroll"


export const NavModal: React.FC<NavModalProps> = ({ handleMenuToggled }) => {
  return (
    <div
            id="navbar"
            className="w-full h-screen absolute top-0 left-1/2 transform -translate-x-1/2 z-30  box-border pt-8 px-5 bg-gray-900 bg-opacity-90"
           >
            <div
              className="w-full flex justify-end items-center"
              onClick={handleMenuToggled}
            >
              <div>
                <div>
                  <button
                    className="pointer-events-auto uppercase hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
                    type="button"
                    onClick={handleMenuToggled}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>

            {/* MENU ITEMS */}

            

            <div
              className="h-full w-full flex flex-col items-center text-center"
              onClick={handleMenuToggled}
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
                  
                  onClick={handleMenuToggled}
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
                  onClick={handleMenuToggled}
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
             
                  onClick={handleMenuToggled}
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
           
                  onClick={handleMenuToggled}
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
                  onClick={handleMenuToggled}
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
  )
}
