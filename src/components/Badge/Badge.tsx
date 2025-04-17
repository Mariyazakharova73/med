import React from 'react';
import cn from 'classnames';

import s from './Badge.module.css';

type BadgeColor = 'pink' | 'green' | 'yellow' | 'orange' | 'violet' | 'blue';

interface BadgeProps {
  color?: BadgeColor;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ color = 'blue', children, className }) => {
  return (
    <span className={cn(s.badge, s[color], className)}>
      {children}
    </span>
  );
};
