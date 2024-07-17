'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import Button from './ui/Button';
import SuccessMessageModal from './SuccessMessageModal';
import Input from './ui/Input';
import Textarea from './ui/Textarea';

const FormContacts = () => {
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
              <div className="lg:w-full">
                <Input
                  id="name_form2"
                  label="Full name"
                  placeholder="John Smith"
                  type="text"
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
                  errors={errors}
                />
              </div>

              <div className="lg:w-full">
                <Input
                  id="email_form2"
                  label="E-mail"
                  placeholder="johnsmith@email.com"
                  type="text"
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
                  errors={errors}
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-full">
              <Textarea
                id="message_form2"
                label="Message"
                className='block resize-none py-1 md:py-2 px-2 h-[193px] md:h-[221px] lg:h-[174px]'
                {...register('message_form2')}
              />
            </div>
          </div>

          <div className="ml-auto mr-0">
            <Button variant="form" type="submit">
              SEND
            </Button>
          </div>
        </div>
      </form>

      {showSuccessMessage && <SuccessMessageModal />}
    </div>
  );
};

export default FormContacts;
