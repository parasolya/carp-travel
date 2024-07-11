'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from './ui/Button';


const FormChooseUs: React.FC<{ mobileScreen: boolean | null }> = ({
  mobileScreen,
}) => {
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  // const isMediumScreen = useMediaQuery({
  //   query: '(min-width: 768px) and (max-width: 1279px)',
  // });

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth <= 1279);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit: SubmitHandler<Record<string, any>> = async (data) => {
    const formData = { ...data, checkbox: isChecked };
    localStorage.setItem('formData', JSON.stringify(formData));
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
    <div
      className={`w-full md:w-2/3 lg:w-1/2 box-border px-5 py-16 md:px-0 md:py-0  md:mt-32 lg:mt-32 bg-cover bg-center bg-no-repeat ${
        mobileScreen ? 'bg-careerMob' : ''
      }`}
    >
      <h2 className="hidden">Form</h2>
      <div className="flex justify-end md:justify-start">
        <h3 className=" w-3/5 md:w-1/2 text-[13px] lg:text-base font-thin  pr-2 lg:mt-0 md:pr-12 mb-8 lg:mb-3 leading-[20px] lg:leading-[24px]">
          Don't miss your opportunity! <br /> Fill out the form right now and
          join our team!
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-2">
        <div className="flex flex-col justify-between gap-6 md:gap-4 lg:gap-6">
          <div className="mb-4 md:mb-0 md:flex justify-between md:gap-2 lg:gap-4">
            <div className="w-full md:w-1/2 md:h-50 mb-4 md:mb-0 flex flex-col gap-4">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block font-thin text-[12px] md:text-xs leading-6  tracking-widest mb-1 lg:mb-2"
                >
                  Full name
                </label>
                <input
                  className={`w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 
              Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-xl leading-6 focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer focus:outline-none hover:outline-none  hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150 ${
                errors.name ? 'text-primary' : ''
              }`}
                  id="name"
                  autoComplete="name"
                  type="text"
                  placeholder="John Smith"
                  {...register('name', {
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
                {errors.name && typeof errors.name.message === 'string' && (
                  <p
                    className="absolute right-0 font-thin text-xs tracking-widest tracking-6 text-primary"
                    style={{ visibility: 'visible' }}
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block font-thin text-[12px] md:text-xs leading-6   tracking-widest tracking-6 mb-1 lg:mb-2"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  autoComplete="email"
                  className={`w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 
                Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-xl leading-6 focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer focus:outline-none hover:outline-none  hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150  ${
                  errors.name ? 'text-primary' : ''
                }`}
                  type="text"
                  placeholder="johnsmith@email.com"
                  {...register('email', {
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
                {errors.email && typeof errors.email.message === 'string' && (
                  <p
                    className="absolute right-0 font-thin text-xs tracking-widest tracking-6 text-primary"
                    style={{ visibility: 'visible' }}
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="block font-thin text-[12px] md:text-xs leading-6   tracking-widest mb-1 lg:mb-2"
                >
                  Position
                </label>
                <input
                  id="position"
                  autoComplete="position"
                  className="w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 
              Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-xl leading-6 focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer focus:outline-none hover:outline-none  hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150"
                  type="text"
                  placeholder="Movie maker"
                  {...register('position')}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block font-thin text-[12px] md:text-xs leading-6   tracking-widest tracking-6 mb-1 lg:mb-2"
                >
                  Phone
                </label>
                <div className="w-full flex items-center overflow-hidden">
                  <div className="block whitespace-nowrap text-center font-extralight md:text-xs lg:text-xl leading-6 py-1 lg:py-0 pl-2 bg-white bg-opacity-5">
                    + 38
                  </div>
                  <input
                    id="phone"
                    autoComplete="phone"
                    className={`flex-1 py-1 lg:py-0 pl-2 Inter font-extralight md:text-xs lg:text-xl leading-6 placeholder-white placeholder-opacity-20 bg-white bg-opacity-5 focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer focus:outline-none hover:outline-none  hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150 ${
                      errors.phone ? 'text-primary' : ''
                    }`}
                    type="text"
                    placeholder="(097) 12 34 567"
                    {...register('phone', {
                      required: {
                        value: true,
                        message: '❌ This field is required.',
                      },
                      maxLength: {
                        value: 20,
                        message: '❌ Max length is 20 characters.',
                      },
                      pattern: {
                        value: /^\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/,
                        message: '❌ Incorrect phone',
                      },
                    })}
                  />
                  {errors.phone && typeof errors.phone.message === 'string' && (
                    <p
                      className="absolute right-0 -bottom-4 font-thin text-xs tracking-widest tracking-6 text-primary"
                      style={{ visibility: 'visible' }}
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-50">
              <label
                htmlFor="message"
                className="block font-thin text-[12px] md:text-xs leading-6 tracking-widest tracking-6 mb-1 lg:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                autoComplete="message"
                className="block resize-none w-full py-1 md:py-2 px-2 font-extralight text-xl leading-6 bg-white bg-opacity-5 focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer focus:outline-none hover:outline-none  hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150"
                rows={isMediumScreen ? 8 : 9}
                {...register('message')}
              ></textarea>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="md:w-1/2 lg:w-full mb-4 md:mb-0 flex gap-2 lg:mt-2 ">
              <label
                htmlFor="checkbox"
                className="h-6 w-6 flex flex-shrink-0 items-center justify-center  border border-white cursor-pointer"
              >
                <input
                  id="checkbox"
                  type="checkbox"
                  className="hidden appearance-none"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <div className="h-4 w-4 flex-shrink-0  flex items-center justify-center bg-opacity-5 bg-white focus:bg-opacity-10 hover:bg-opacity-10 focus:outline-none hover:outline-none  hover:transition hover:duration-150 ease-in-out focus:transition focus:duration-150">
                  {isChecked && <div className="w-4 h-4 bg-white"></div>}
                </div>
              </label>

              <p className="font-thin text-[12px] md:text-xs leading-loose ">
                I confirm my consent to the processing of personal data.
              </p>
            </div>
            <div className="ml-auto mr-0">
              <Button variant="form" type="submit">
                SEND
              </Button>
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

export default FormChooseUs;
