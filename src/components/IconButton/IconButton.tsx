import cn from 'classnames'; 
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  children?: ReactNode;
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
}

export const IconButton = ({
  icon,
  children,
  variant = 'default',
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button type="button" className={cn(styles.button, styles[variant], className)} {...props}>
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
};
