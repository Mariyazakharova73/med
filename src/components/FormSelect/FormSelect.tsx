import cn from 'classnames';
import { FC } from 'react';

import { LabelPosition } from '../../types/types';

import s from './FormSelect.module.css';

interface Option {
  label: string;
  value: string;
  type?: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Option[];
  placeholder?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  error?: string | null;
}

export const FormSelect: FC<FormSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Выберите вариант',
  labelPosition = 'top',
  disabled = false,
  error,
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
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={cn(s.select, {
            [s.error]: !!error
          })}
          {...rest}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options?.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className={s.errorText}>{error}</p>}
      </div>
    </div>
  );
};
