'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const FormContacts = () => {
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);  

  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (isValid) {
      setShowSuccessMessage(true);
      reset();
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1000); 
    }
  };


  return (
    <div className="h-full w-full mt-6 md:mt-10">
      <h2 className="hidden">Form Contacts</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="lg:h-full lg:w-full lg:mt-2">
        <div className="flex flex-col justify-between gap-4">
          <div className="lg:w-full flex flex-col gap-8 md:flex-row lg:flex-col justify-between md:gap-4 lg:gap-6">
            <div className="w-full md:w-1/3 lg:w-full h-50 flex gap-8 flex-col lg:flex-row md:gap-4">
              <div className="lg:w-full relative">
                <label
                  htmlFor="name"
                  className="block font-thin text-xs tracking-widest mb-2"
                >
                  Full name
                </label>
                <input
                  className={`w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 
                  Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-lg leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer ${errors.name ? 'text-primary' : ''
                  }`}
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  {...register('name', {
                    required: true,
                    maxLength: 30,
                    pattern: /^[A-Za-z]+\s[A-Za-z]+$/,
                  })}
                />
                {errors.name && (
                  <p
                    className="absolute right-0 font-thin text-xs tracking-widest tracking-6 text-primary"
                    style={{ visibility: 'visible' }}
                  >
                    {errors.name &&
                      errors.name.type === 'required' &&
                      '❌ This field is required.'}
                    {errors.name &&
                      errors.name.type === 'maxLength' &&
                      '❌ Max length is 20 characters.'}
                    {errors.name &&
                      errors.name.type === 'pattern' &&
                      '❌ Incorrect name'}
                  </p>
                )}
              </div>

              <div className="lg:w-full relative">
                <label
                  htmlFor="email"
                  className="block font-thin text-xs tracking-widest tracking-6 mb-2"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  className={`w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 
                Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-lg leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer ${
                  errors.name ? 'text-primary' : ''
                }`}
                  type="text"
                  placeholder="johnsmith@email.com"
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                />
                {errors.email && (
                  <p
                    className="absolute right-0 font-thin text-xs tracking-widest tracking-6 text-primary"
                    style={{ visibility: 'visible' }}
                  >
                    {errors.email &&
                      errors.email.type === 'required' &&
                      '❌ This field is required.'}
                    {errors.email &&
                      errors.email.type === 'pattern' &&
                      '❌ Incorrect email'}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-full">
              <label
                htmlFor="message"
                className="block font-thin text-xs tracking-widest tracking-6 mb-2"
              >
                Message
              </label>
              <textarea
                className="block resize-none w-full py-1 px-2 font-extralight text-xl leading-6 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
                rows={isMediumScreen ? 8 : 7}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex ml-auto mr-0">
              <button
                className="w-20 h-9 flex items-start justify-end font-medium text-4xl  md:text-3xl  cursor-pointer"
                type="submit"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </form>

      {showSuccessMessage && (
        <div className="relative inset-0 flex items-center justify-center">
          <div
            className="w-1/2 md:w-1/3 absolute bottom-14 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: 'url(/bg-hero.png)',
            }}
          >
            <p className="py-8 md:py-12 ml:py-24 text-2xl font-thin">
              Successfull!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormContacts;
