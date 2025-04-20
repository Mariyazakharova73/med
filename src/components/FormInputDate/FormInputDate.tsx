import cn from 'classnames';
import { ChangeEvent, FC, FocusEvent, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { CalendarIcon } from '../../assets';
import { LabelPosition } from '../../types/types';
import { IconButton } from '../IconButton/IconButton';

import s from './FormInputDate.module.css';

interface FormInputDateProps {
  label?: string;
  name: string;
  value: number | string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  labelPosition?: LabelPosition;
  error?: string;
}

export const FormInputDate: FC<FormInputDateProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder = '',
  labelPosition = 'left',
  error
}) => {
  const datePickerRef = useRef<DatePicker | null>(null);

  const openCalendar = () => {
    datePickerRef.current?.setOpen(true);
  };

  const dateValue = typeof value === 'number' ? new Date(value * 1000) : null;

  const handleDateChange = (date: Date) => {
    const syntheticEvent = {
      target: {
        name,
        value: Math.floor(date.getTime() / 1000),
        closest: () => document.querySelector('.form')
      }
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };

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
        <DatePicker
          ref={datePickerRef}
          id={name}
          name={name}
          selected={dateValue}
          dateFormat="dd.MM.yyyy"
          onChange={handleDateChange}
          onBlur={onBlur}
          placeholderText={placeholder}
          className={cn(s.input, {
            [s.error]: !!error
          })}
          required
        />
        <IconButton
          src={CalendarIcon}
          alt="calendar"
          className={s.calendarIcon}
          onClick={openCalendar}
        />
        {error && <p className={s.errorText}>{error}</p>}
      </div>
    </div>
  );
};
