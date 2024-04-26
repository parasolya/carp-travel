'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const FormContacts = () => {
  const {
    handleSubmit,
    register,
    trigger,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });

  const [isPhonePlaceholder, setisPhonePlaceholder] = useState<boolean>(true);
  const [formattedValue, setFormattedValue] = useState('');

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (isValid) {
      setIsSubmitSuccess(true);
      alert(e);
      setTimeout(() => {
        setShowSuccessMessage(true);
        reset();
      }, 1000);
    }
  };

  return (
    <div className="h-full md:mt-10">
      <h2 className="hidden">Form Contacts</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-2">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex justify-between gap-4">
            <div className="w-1/2 h-50 flex flex-col gap-4">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block font-thin text-xs tracking-widest mb-2"
                >
                  Full name
                </label>
                <input
                  className={`w-full bg-white bg-opacity-5 py-1 pl-2 
                  Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-xl leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer ${errors.name ? 'text-primary' : ''
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

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block font-thin text-xs tracking-widest tracking-6 mb-2"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  className={`w-full bg-white bg-opacity-5 py-1 pl-2 
                Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-xl leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer ${
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

            <div className="w-1/2">
              <label
                htmlFor="message"
                className="block font-thin text-xs tracking-widest tracking-6 mb-2"
              >
                Message
              </label>
              <textarea
                className="block resize-none w-full py-1 px-2 font-extralight text-xl leading-6 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
                // rows={isMediumScreen ? 8 : 10}
                rows={8}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex ml-auto mr-0">
              <button
                // flex items-start
                className="w-20 h-9 flex items-start justify-end font-medium md:text-3xl lg:text-lg cursor-pointer"
                type="submit"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </form>

      {showSuccessMessage && (
        <div>
          <div>
            <p>
              Successfull! <br />
              You are in!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormContacts;
