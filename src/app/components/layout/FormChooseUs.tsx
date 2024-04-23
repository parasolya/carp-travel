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

//   const inputRef = useRef<HTMLInputElement>(null);

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
    e.preventDefault();

    const isValid = await trigger();
    if (isValid) {
      setIsSubmitSuccess(true);
      alert('Succc!');
      setTimeout(() => {
        setShowSuccessMessage(true);
        reset();
      }, 1000);
    }
  };

  return (
    <div
    // className={css.section}
    >
      <h1 className="hidden">Form</h1>

      <div
      // className={css.wrapper}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
          // className={css.inputWrapper}
          >
            <input
              className="bg-black"
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
            <input
              className="bg-black"
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
            <input
              className="bg-black"
              type="text"
              placeholder="Movie maker"
              {...register('Position')}
            />
          </div>
          <div>
            <input
              className="bg-black"
              type="text"
              defaultValue="+ 38 "
              placeholder="(097) 12 34 567"
              {...register('phone', {
                required: true,
                maxLength: 20,
                pattern: /^\+\s38\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/,
                
              })}
              onChange={(event) => {
                const value = event.target.value;
                console.log(value); 
                console.log(errors.phone); 
              }}          
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

          <button
            // className={css.btnSubmit}
            type="submit"
          >
            {isSubmitSuccess ? 'MINTED' : 'SEND'}
          </button>
        </form>

        {showSuccessMessage && (
          <div
          // className={css.popUp}
          >
            <div
            //   className={`${css.containerItem} ${css.addColor}`}
            >
              <p
              // className={css.upperElement}
              >
                Successfull! <br />
                You are in!
              </p>
            </div>
          </div>
        )}
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default FormChooseUs;
