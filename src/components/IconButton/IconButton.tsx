import cn from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  children?: ReactNode;
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
}

export const IconButton = ({
  src,
  alt,
  children,
  variant = 'ghost',
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button type="button" className={cn(styles.button, styles[variant], className)} {...props}>
      <img src={src} alt={alt} />
      {children && <span>{children}</span>}
    </button>
  );
};
