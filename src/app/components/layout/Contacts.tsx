'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Contacts() {
  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <div className="lg:h-full lg:w-full mt-12 md:mt-10">
      <h2 className="hidden">Contacts</h2>
      <div className="lg:h-full lg:w-full md:flex lg:flex-col lg:justify-between items-start lg:items-start gap-14 ">
        {/* 1 */}
        <div className=" md:w-1/2 lg:w-full mb-8 md:mb-0  flex flex-col gap-8">
          <div className=" flex justify-end lg:justify-center items-start gap-4">
            <ul className="lg:w-1/2 list-none text-end items-center">
              <li className="cursor-pointer">
                <a
                  className="md:leading-5 lg:leading-6"
                  href="tel:+380961234567"
                >
                  +38 (098) 12 34 567
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className="md:leading-5 lg:leading-6"
                  href="tel:+380731234567"
                >
                  +38 (073) 12 34 567
                </a>
              </li>
            </ul>

            <h3 className="lg:w-1/2 text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
              Phone number
            </h3>
          </div>
          <div className=" flex justify-center lg:justify-center items-start gap-4">
            <div className="lg:w-1/2 lg:flex justify-end cursor-pointer">
              <a
                className="text-right md:leading-5 lg:leading-6"
                href="mailto::support@carptravel.com"
              >
                support@carptravel.com
              </a>
            </div>

            <h3 className="lg:w-1/2  text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
              E-mail
            </h3>
          </div>
        </div>
        {/* 2 */}
        <div className="md:w-1/2 lg:w-full flex justify-end md:justify-start lg:justify-center items-start gap-4">
          {!isDesktopScreen && (
            <h3 className="lg:w-1/2 lg:text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
              Follow us
            </h3>
          )}
          <ul className="lg:w-1/2">
            <li className="cursor-pointer flex justify-end">
              <a
                className=" md:leading-5 lg:leading-6 hover:underline cursor-pointer"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                facebook
              </a>
            </li>
            <li className="cursor-pointer flex justify-end">
              <a
                className="md:leading-5 lg:leading-6 hover:underline cursor-pointer"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                instagram
              </a>
            </li>
            <li className="cursor-pointer flex justify-end">
              <a
                className="md:leading-5 lg:leading-6 hover:underline cursor-pointer"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                youtube
              </a>
            </li>
            <li className="flex justify-end">
              <a
                className="md:leading-5 lg:leading-6 hover:underline cursor-pointer"
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
              >
                tiktok
              </a>
            </li>
          </ul>
          {isDesktopScreen && (
            <h3 className="lg:w-1/2 lg:text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
              Follow us
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
