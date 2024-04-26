// 'use client'
import React from 'react';

function Contacts() {
  return (
    <div className="md:mt-10">
      <h2 className="hidden">Contacts</h2>
      <div className="md:flex items-start gap-20">
        {/* 1 */}
        <div className=" md:w-1/2 flex flex-col gap-8">
          <div className="flex justify-end items-start gap-4">
            <ul className="list-none text-end">
              <li className="md:leading-5 lg:leading-6">+38 (098) 12 34 567</li>
              <li className="md:leading-5 lg:leading-6">+38 (073) 12 34 567</li>
            </ul>

            <h3 className="text-start md:text-xs font-thin md:leading-5 lg:leading-6">
              Phone number
            </h3>
          </div>
          <div className="flex justify-center items-start gap-4">
            <div className="text-right md:leading-5 lg:leading-6">
              support@carptravel.com
            </div>

            <h3 className="text-start md:text-xs font-thin md:leading-5 lg:leading-6">
              E-mail
            </h3>
          </div>
        </div>
        {/* 2 */}
        <div className="md:w-1/2 flex justify-start items-start gap-4">
          <h3 className="lg:text-start md:text-xs font-thin md:leading-5 lg:leading-6">
            Follow us
          </h3>
          <ul>
            <li className="md:leading-5 lg:leading-6">facebook</li>
            <li className="md:leading-5 lg:leading-6">instagram</li>
            <li className="md:leading-5 lg:leading-6">youtube</li>
            <li className="md:leading-5 lg:leading-6">tiktok</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
