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

  const inputRef = useRef<HTMLInputElement>(null);

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isDiscordUsernameFilled, setIsDiscordUsernameFilled] = useState(false);
  const [isWalletAddressFilled, setIsWalletAddressFilled] = useState(false);

  //   const [inputPhoneValue, setInputPhoneValue] = useState('+38 ');

  const [inputValue, setInputValue] = useState('+38 ');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     let value = event.target.value;
//     console.log(value);
//     const regex = /^\+38\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/;
  
//     if (!regex.test(value)) {
//       // Введено не вірний формат, перевіряємо, чи введено цифри та обрізаємо всі нецифрові символи
//       value = value.replace(/\D/g, '');
  
//       // Перевіряємо чи введено не більше 13 цифр (якщо додається номер)
      
//       if (value.length >= 13) {
//         value = '+38 (' + value.substring(2, 5) + ') ' + value.substring(5, 7) + ' ' + value.substring(7, 9) + ' ' + value.substring(9);
       
//       }
//     }
//     if (value.length > 13) {
//         alert('Більше цифр, ніж треба');
//       }
  
//     setInputValue(value);
//     register('phone', { required: true, pattern: /^\+\d{2}\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/ });
//   };

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //    let value = event.target.value;
  //     console.log(value)
  //     if (value.length === 19) {
  //       const regex = /^\+38\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/;

  //       if (!regex.test(value)) {
  //         console.log('не пройшов тест')

  //       }
  //     } else if (value.length < 19) {
  //       // Забороняємо введення будь-яких символів, які не є цифрами або необхідними символами для формату
  //       value = value.replace(/[^\d() -+]/g, '');

  //       // Перевіряємо, чи символ "+" вже присутній в рядку. Якщо ні, додаємо його
  //       if (!value.startsWith('+')) {
  //         value = '+38 ' + value;
  //       }
  //     }

  //     setInputPhoneValue(value);
  //   };

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
        <form
          // className={css.form}
          onSubmit={handleSubmit(onSubmit)}
          // action="https://formsubmit.co/ola.shevchuk@gmail.com"
          // method="POST"
        >
          {/* <input type="hidden" name="_captcha" value="false" /> 
                 <input
                  type="hidden"
                  name="_subject"
                  value="Ape-NFT-New submission!"
                /> */}

          <div
          // className={css.inputWrapper}
          >
            <input
              className="bg-black"
              // className={`${css.input} ${
              //   errors.discordUsername ? css.error : ""
              // } ${isDiscordUsernameFilled ? css.filled : ""}`}
              type="text"
              // name="discordUsername"
              placeholder="John Smith"
              {...register('name', {
                required: true,
                maxLength: 30,
                pattern: /^[A-Za-z]+\s[A-Za-z]+$/,
              })}
            />
            {errors.name && (
              <p
                // className={css.text}
                style={{ visibility: 'visible' }}
              >
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

          <div
          // className={css.inputWrapper}
          >
            <input
              className="bg-black"
              // className={`${css.input} ${
              //   errors.walletAddress ? css.error : ""
              // } ${isWalletAddressFilled ? css.filled : ""}`}
              type="text"
              // name="walletAddress"
              placeholder="johnsmith@email.com"
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            {errors.email && (
              <p
                // className={css.text}
                style={{ visibility: 'visible' }}
              >
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
          <div
          // className={css.inputWrapper}
          >
            <input
              className="bg-black"
              // className={`${css.input} ${
              //   errors.discordUsername ? css.error : ""
              // } ${isDiscordUsernameFilled ? css.filled : ""}`}
              type="text"
              
            //   onChange={(e) => {
            //     handleChange(e);
                
            //   }}
            defaultValue='+38 '
              placeholder="(097) 12 34 567"
              {...register('phone', {
                required: true,
                maxLength: 10,
                pattern: /^\+38\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/,
                // value: inputValue, 
              })}
              ref={inputRef}
            />
            {errors.phone && (
              <p style={{ visibility: 'visible' }}>
                {errors.phone.type === 'required' && 'This field is required.'}
                {errors.phone.type === 'pattern' && '❌ Incorrect phone'}
                {errors.phone.type === 'maxLength' &&
                  'Max length is 10 characters.'}
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
