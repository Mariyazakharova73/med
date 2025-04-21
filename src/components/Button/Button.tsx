import cn from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import s from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'light';
}

export const Button: FC<ButtonProps> = ({ children, className, variant = 'default', ...props }) => {
  return (
    <button className={cn(s.button, s[variant], className)} {...props}>
      {children}
    </button>
  );
};
