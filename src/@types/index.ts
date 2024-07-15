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
