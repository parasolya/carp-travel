// 'use cankent'
import React from 'react';

function Contacts() {
  return (
    <div className="mt-12 md:mt-10">
      <h2 className="hidden">Contacts</h2>
      <div className="md:flex items-start gap-20">
        {/* 1 */}
        <div className=" md:w-1/2 mb-8 md:mb-0  flex flex-col gap-8">
          <div className="flex justify-end items-start gap-4">
            <ul className="list-none text-end">
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

            <h3 className="text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
              Phone number
            </h3>
          </div>
          <div className="flex justify-center items-start gap-4">
            <div className='cursor-pointer'>
              <a
                className="text-right md:leading-5 lg:leading-6"
                href="mailto::support@carptravel.com"
              >
                support@carptravel.com
              </a>
            </div>

            <h3 className="text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
              E-mail
            </h3>
          </div>
        </div>
        {/* 2 */}
        <div className="md:w-1/2 flex justify-end md:justify-start items-start gap-4">
          <h3 className="lg:text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
            Follow us
          </h3>
          <ul>
            <li className="cursor-pointer">
              <a
                className="md:leading-5 lg:leading-6"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                facebook
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="md:leading-5 lg:leading-6"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                instagram
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="md:leading-5 lg:leading-6"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                youtube
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="md:leading-5 lg:leading-6"
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
              >
                tiktok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
