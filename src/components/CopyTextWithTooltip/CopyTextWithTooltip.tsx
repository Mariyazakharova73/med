import { useState } from 'react';

import { CustomTooltip, IconButton } from '..';
import { CopyIcon } from '../../assets';

import s from './CopyTextWithTooltip.module.css';

interface Props {
  text: string;
  tooltipId: string;
  tooltipText?: string;
  className?: string;
}

export const CopyTextWithTooltip = ({
  text,
  tooltipId,
  tooltipText = 'Копировать',
  className
}: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  return (
    <div className={`${s.flexItem} ${className || ''}`}>
      <p className={s.ellipsisSmall}>{text}</p>
      <IconButton
        variant="ghost"
        src={CopyIcon}
        alt="Копировать"
        onClick={handleCopy}
        data-tooltip-id={tooltipId}
        data-tooltip-content={copied ? 'Скопировано!' : tooltipText}
      />
      <CustomTooltip id={tooltipId} place="bottom" />
    </div>
  );
};
