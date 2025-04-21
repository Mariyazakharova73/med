import cn from 'classnames';
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import { LabelPosition } from '../../types/types';
import { IconButton } from '../IconButton/IconButton';

import s from './FormInput.module.css';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string | null;
  labelPosition?: LabelPosition;
  icon?: string;
  action?: () => void;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  error,
  labelPosition = 'top',
  icon,
  action,
  ...rest
}) => {
  return (
    <div
      className={cn(s.wrapper, {
        [s.labelLeft]: labelPosition === 'left',
        [s.labelTop]: labelPosition === 'top'
      })}
    >
      {label && (
        <label htmlFor={name} className={cn(s.label)}>
          {label}
        </label>
      )}
      <div className={s.inputWrapper}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={cn(s.input, {
            [s.error]: !!error
          })}
          {...rest}
        />{' '}
        {icon && <IconButton src={icon} alt="icon" className={s.icon} onClick={action} />}
        {error && <p className={s.errorText}>{error}</p>}
      </div>
    </div>
  );
};
