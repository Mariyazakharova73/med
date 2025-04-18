import React from 'react';
import cn from 'classnames';

import s from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
}

export const Button: React.FC<ButtonProps> = ({ children, className, variant = 'default', ...props }) => {
  return (
    <button className={cn(s.button, s[variant], className)} {...props}>
      {children}
    </button>
  );
};
