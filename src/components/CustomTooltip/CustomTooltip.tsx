import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import s from './CustomTooltip.module.css';

interface CustomTooltipProps {
  id: string;
  place?: 'top' | 'right' | 'bottom' | 'left';
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

export const CustomTooltip = ({ id, place = 'top', content, children }: CustomTooltipProps) => {
  return (
    <Tooltip id={id} place={place} className={s.tooltip} noArrow content={content}>
      {children}
    </Tooltip>
  );
};
