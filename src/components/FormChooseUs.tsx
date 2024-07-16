'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Checkbox from './ui/Checkbox';

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
              <Input
                id="name"
                label="Full name"
                type="text"
                placeholder="John Smith"
                errors={errors}
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
                register={register}
              />

              <Input
                id="email"
                label="E-mail"
                type="text"
                placeholder="johnsmith@email.com"
                errors={errors}
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
                register={register}
              />

              <Input
                id="position"
                label="Position"
                type="text"
                placeholder="Movie maker"
                errors={errors}
                {...register('position')}
                register={register}
              />

              <Input
                id="phone"
                label="Phone"
                type="text"
                placeholder="(097) 12 34 567"
                errors={errors}
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
                register={register}
              />
            </div>

            <div className="w-full md:w-1/2 h-50">
              <Textarea
                id="message"
                label="Message"
                className="block resize-none py-1 md:py-2 px-2"
                rows={isMediumScreen ? 8 : 9}
                {...register('message')}
                register={register}
              />
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="md:w-1/2 lg:w-full mb-4 md:mb-0 flex gap-2 lg:mt-2 ">
              <Checkbox
                id="checkbox"
                type="checkbox"
                className="hidden appearance-none"
                checked={isChecked}
                onChange={handleChange}
              />

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
