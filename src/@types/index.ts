import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface NavMenyProps {
  className?: string;
  classNameList?: string;
  classNameLink?: string;
  onMenuToggled?: () => void;
}

export interface BurgerMenuProps {
  handleMenuToggled: () => void;
  className: string;
}

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'slider' | 'text';
  children: string;
  className?: string;
}

export interface LinkButtonProp
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: 'main' | 'navLink';
  children: React.ReactNode;
  to: string;
  className?: string;
  handleMenuToggled?: () => void;
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

import { FieldError, FieldErrors, FieldValues } from 'react-hook-form';

type FieldErrorsToRecord<T> = {
  [K in keyof T]: T[K] extends FieldErrors<any> ? Record<string, FieldError | undefined> : T[K];
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  placeholder?: string;
  type: string;
  errors: FieldErrorsToRecord<FieldValues>; 
  className?: string;
  classNameLabel?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

export interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  classNameLabel?: string;
}
