'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';

const FormChooseUs = () => {
  const {
    handleSubmit,
    register,
    trigger,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [isPhonePlaceholder, setisPhonePlaceholder] = useState<boolean>(true);
  const [formattedValue, setFormattedValue] = useState('');

  // const formatValue = (value: any) => {
  //   if (value.length === 10) {
  //     return (
  //       '(' +
  //       value.substring(0, 3) +
  //       ') ' +
  //       value.substring(3, 5) +
  //       ' ' +
  //       value.substring(5, 7) +
  //       ' ' +
  //       value.substring(7) +
  //       ' '
  //     );
  //   }
  //   return value;
  // };

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isDiscordUsernameFilled, setIsDiscordUsernameFilled] = useState(false);
  const [isWalletAddressFilled, setIsWalletAddressFilled] = useState(false);

  useEffect(() => {
    if (watch('discordUsername') !== '') {
      setIsDiscordUsernameFilled(true);
    } else {
      setIsDiscordUsernameFilled(false);
    }
    if (watch('walletAddress') !== '') {
      setIsWalletAddressFilled(true);
    } else {
      setIsWalletAddressFilled(false);
    }
  }, [watch('discordUsername'), watch('walletAddress')]);

  //   onSubmit: SubmitHandler<FormValues>

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

  //   const inputRef = useRef<HTMLInputElement>(null);

  //   useEffect(() => {
  //     if (inputRef.current) { // Перевірка, чи існує inputRef.current перед використанням
  //       inputRef.current.focus();
  //       inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
  //     }
  //   }, []);

  return (
    <div className="h-full">
      <h2 className="hidden">Form</h2>
      <h3 className="lg:w-1/2 md:text-sm lg:text-base font-thin lg:pr-16">
        Don't miss your opportunity! Fill out the form right now and join our
        team!
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-50 flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block font-thin lg:text-xs tracking-widest mb-2"
              >
                Full name
              </label>
              <input
                className="w-full bg-white bg-opacity-5 py-1 pl-2 
              Inter font-extralight placeholder-white placeholder-opacity-20 text-xl leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
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
                <p style={{ visibility: 'visible' }}>
                  {errors.name &&
                    errors.name.type === 'required' &&
                    'This field is required.'}
                  {errors.name &&
                    errors.name.type === 'maxLength' &&
                    'Max length is 20 characters.'}
                  {errors.name &&
                    errors.name.type === 'pattern' &&
                    '&#10060; Incorrect name'}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-thin lg:text-xs tracking-widest tracking-6 mb-2"
              >
                E-mail
              </label>
              <input
                id="email"
                className="w-full bg-white bg-opacity-5 py-1 pl-2 
                Inter font-extralight placeholder-white placeholder-opacity-20 text-xl leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
                type="text"
                placeholder="johnsmith@email.com"
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              {errors.email && (
                <p style={{ visibility: 'visible' }}>
                  {errors.email &&
                    errors.email.type === 'required' &&
                    'This field is required.'}
                  {errors.email &&
                    errors.email.type === 'pattern' &&
                    '&#10060; Invalid email'}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="position"
                className="block font-thin lg:text-xs tracking-widest mb-2"
              >
                Position
              </label>
              <input
                id="position"
                className="w-full bg-white bg-opacity-5 py-1 pl-2 
              Inter font-extralight placeholder-white placeholder-opacity-20 text-xl leading-6 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
                type="text"
                placeholder="Movie maker"
                {...register('Position')}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-thin lg:text-xs tracking-widest tracking-6 mb-2"
              >
                Phone
              </label>
              <div className="w-full flex items-center overflow-hidden">
                <div className="block whitespace-nowrap text-center font-extralight text-xl leading-6 py-1 pl-2 bg-white bg-opacity-5">
                  + 38
                </div>
                <input
                  id="phone"
                  className="flex-1 py-1 pl-2 Inter font-extralight text-xl leading-6 placeholder-white placeholder-opacity-20 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
                  //   ref={inputRef}
                  type="text"
                  placeholder="(097) 12 34 567"
                  {...register('phone', {
                    required: true,
                    maxLength: 20,
                    pattern: /^\+\s38\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/,
                  })}
                  // onChange={(event) => {
                  //   const value = event.target.value;
                  //   if (value !== '+ 38 ') {
                  //     console.log('зміна value');
                  //     setisPhonePlaceholder(false);
                  //   }

                  //   setFormattedValue(formatValue(value));
                  //   console.log(value);
                  //   console.log(errors.phone);
                  // }}
                  // value={formattedValue}
                />
                {errors.phone && (
                  <p style={{ visibility: 'visible' }}>
                    {errors.phone &&
                      errors.phone.type === 'required' &&
                      'This field is required.'}
                    {errors.phone &&
                      errors.phone.type === 'maxLength' &&
                      'Max length is 20 characters.'}
                    {errors.phone &&
                      errors.phone.type === 'pattern' &&
                      '❌ Incorrect pattern'}
                  </p>
                )}
              </div>
            </div>
         
          </div>
          
            <div className='h-50'>
              <label
                htmlFor="message"
                className="block font-thin lg:text-xs tracking-widest tracking-6 mb-2"
              >
                Message
              </label>
              <textarea className="block resize-none w-full py-1 px-2 font-extralight text-xl leading-6 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
              rows={10}
              ></textarea>
            </div>

            
         
          <div className="w-full flex gap-2 lg:mt-2 ">
              <div className="h-6 w-6 flex-shrink-0 border border-white flex items-center justify-center">
                <input
                  type="checkbox"
                  className="appearance-none p-2 h-4 w-4 flex-shrink-0 bg-white bg-opacity-10  checked:bg-white checked:border-transparent focus:outline-none focus:bg-opacity-10 hover:bg-opacity-10 cursor-pointer"
                />
              </div>
              <p className="md:text-sm  font-thin lg:text-xs leading-loose">
                I confirm my consent to the processing of personal data.
              </p>
            </div>
            <div className='flex ml-auto mr-0'>
            <button
            // flex items-start
              className="w-20 h-9 flex items-start justify-end font-medium text-lg cursor-pointer"  
              type="submit"
            >
              SEND
            </button>
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

export default FormChooseUs;

// focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:outline-none transition-colors duration-300
