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

  const onSubmit: SubmitHandler<Record<string, any>> = async (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:h-full lg:w-full lg:mt-2"
      >
        <div className="flex flex-col justify-between gap-4">
          <div className="lg:w-full flex flex-col gap-8 md:flex-row lg:flex-col justify-between md:gap-4 lg:gap-6">
            <div className="w-full md:w-1/3 lg:w-full h-50 flex gap-8 flex-col lg:flex-row md:gap-4">
              <div className="lg:w-full relative">
                <label
                  htmlFor="name_form2"
                  className="block font-thin text-xs tracking-widest mb-2"
                >
                  Full name
                </label>
                <input
                  className={`w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 
                  Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-lg leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150 ${
                    errors.name_form2 ? 'text-primary' : ''
                  }`}
                  id="name_form2"
                  type="text" 
                  placeholder="John Smith"
                  {...register('name_form2', {
                    required: {
                      value: true,
                      message: '❌ This field is required.',
                    },
                    maxLength: {
                      value: 30,
                      message: '❌ Max length is 30 characters.',
                    },
                    pattern: {
                      value: /^[A-Za-z]+\s[A-Za-z]+$/,
                      message: '❌ Incorrect name',
                    },
                  })}
                />
                {errors.name_form2 &&
                  typeof errors.name_form2.message === 'string' && (
                    <p
                      className="absolute right-0 font-thin text-xs tracking-widest tracking-6 text-primary"
                      style={{ visibility: 'visible' }}
                    >
                      {errors.name_form2.message}
                    </p>
                  )}
              </div>

              <div className="lg:w-full relative">
                <label
                  htmlFor="email_form2"
                  className="block font-thin text-xs tracking-widest tracking-6 mb-2"
                >
                  E-mail
                </label>
                <input
                  id="email_form2"
                  className={`w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 
                Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-lg leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150  ${
                  errors.email_form2 ? 'text-primary' : ''
                }`}
                  type="text"
                  placeholder="johnsmith@email.com"
                  {...register('email_form2', {
                    required: {
                      value: true,
                      message: '❌ This field is required.',
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: '❌ Incorrect email',
                    },
                  })}
                />
                {errors.email_form2 &&
                  typeof errors.email_form2.message === 'string' && (
                    <p
                      className="absolute right-0 font-thin text-xs tracking-widest tracking-6 text-primary"
                      style={{ visibility: 'visible' }}
                    >
                      {errors.email_form2.message}
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
                id="message"
                className="block resize-none w-full py-1 px-2 font-extralight text-xl leading-6 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150"
                rows={isMediumScreen ? 8 : 7}
                {...register('message')}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex ml-auto mr-0">
              <button
                className="w-20 h-9 flex items-start justify-end font-medium text-4xl  md:text-3xl cursor-pointer outline-none shadow-none hover:underline hover:transition hover:duration-150 ease-in-out focus:underline focus:transition focus:duration-150"
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
