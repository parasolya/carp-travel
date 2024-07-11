import { ButtonHTMLAttributes } from 'react';

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'slider' | 'form';
  children: string;
  className?: string;
}
