import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'slider' | 'form';
  children: string;
  className?: string;
}

export interface LinkButtonProp
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: 'main' | 'navLink';
  children: React.ReactNode;
  to: string;
  className?: string;
}

export interface PhoneNumberProp {
  phone: string;
}

export interface EmailProp {
  mail: string;
}

export interface SocialProp {
  social: string;
}

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProp {
  id: string;
  label?: string;
  placeholder?: string;
  type: string;
  errors: FieldErrors<FieldValues>;
  className?: string;
  classNameLabel?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<FieldValues>;
}

export interface CheckboxtProp {
  id: string;
  label?: string;
  type: string;
  className?: string;
  classNameLabel?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaProp {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  classNameLabel?: string;
  rows?: number;
  register: UseFormRegister<FieldValues>;
}
