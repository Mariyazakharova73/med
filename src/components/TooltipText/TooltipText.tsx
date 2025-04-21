import cn from 'classnames';

import { CustomTooltip } from '..';

import s from './TooltipText.module.css';

interface TooltipTextProps {
  text?: string;
  tooltipId: string;
  tooltipText?: string;
  className?: string;
  ellipsis?: boolean;
}

export const TooltipText = ({
  text,
  tooltipId,
  tooltipText,
  className,
  ellipsis = true
}: TooltipTextProps) => {
  return (
    <div className={cn(className, s.tooltip)}>
      <p
        className={cn(ellipsis && s.ellipsisSmall)}
        data-tooltip-content={tooltipText}
        data-tooltip-id={tooltipId}
      >
        {text}
      </p>
      <CustomTooltip id={tooltipId} place="bottom" />
    </div>
  );
};
