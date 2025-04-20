import cn from 'classnames';
import { ChangeEvent, FC, FocusEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import { Button, FormInput, FormInputDate, FormSelect } from '..';
import { LabelPosition } from '../../types/types';
import { FORM_FIELDS, formFields } from '../../utils/constants';

import s from './UserForm.module.css';

interface UserFormProps {
  values: { [key: string]: string };
  errors: { [key: string]: string };
  isValid: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: () => void;
  setOpen?: (value: boolean) => void;
}

export const UserForm: FC<UserFormProps> = ({
  values,
  errors,
  isValid,
  handleChange,
  onSubmit,
  handleBlur,
  setOpen
}) => {
  const { id } = useParams<{ id: string }>();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={cn(s.form, 'form')} onSubmit={handleSubmit} noValidate>
      {FORM_FIELDS.map(field => {
        const commonProps = {
          key: field.name,
          label: field.label,
          name: field.name,
          type: field.type,
          value: values[field.name] ?? '',
          onChange: handleChange,
          onBlur: handleBlur,
          error: errors[field.name],
          labelPosition: 'left' as LabelPosition,
          placeholder: field.placeholder,
          ...field.validation
        };

        return field.type === 'select' ? (
          <FormSelect {...commonProps} options={field.options || []} key={field.name} />
        ) : (
          <FormInput {...commonProps} key={field.name} />
        );
      })}
      {id && (
        <Button className={s.changePasswordBtn} variant="light" onClick={() => setOpen?.(true)}>
          Изменить пароль
        </Button>
      )}
      <FormInputDate
        label="Дата принятия на работу"
        placeholder="Выберите дату"
        name="hired_at"
        value={values['hired_at']}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors['hired_at']}
      />

      <Button type="submit" disabled={!isValid}>
        Сохранить изменения
      </Button>
    </form>
  );
};
