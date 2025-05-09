import React, { FC } from 'react';
import cn from 'classnames';

import s from './Badge.module.css';

type BadgeColor = 'pink' | 'green' | 'yellow' | 'orange' | 'violet' | 'blue'| 'gray';

interface BadgeProps {
  color?: BadgeColor;
  children: React.ReactNode;
  className?: string;
}

export const Badge: FC<BadgeProps> = ({ color = 'blue', children, className }) => {
  return (
    <span className={cn(s.badge, s[color], className)}>
      {children}
    </span>
  );
};
