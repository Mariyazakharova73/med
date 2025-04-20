import { ChangeEvent, FC, FocusEvent } from 'react';
import { Link } from 'react-router-dom';

import { BreadCrumbsIcon } from '../../assets';
import { RoutePath } from '../../routes';
import { IconButton } from '../IconButton/IconButton';
import { UserForm } from '../UserForm/UserForm';

import s from './UserFormWrapper.module.css';

interface UserFormWrapperProps {
  text: string;
  title: string;
  values: { [key: string]: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: () => void;
  errors: { [key: string]: string };
  isValid: boolean;
  setOpen?: (value: boolean) => void
}

export const UserFormWrapper: FC<UserFormWrapperProps> = ({
  text,
  title,
  values,
  handleChange,
  handleBlur,
  onSubmit,
  errors,
  isValid,
  setOpen
}) => {
  return (
    <div>
      <div className={s.breadcrumbs}>
        <Link className={s.link} to={RoutePath.users}>
          <IconButton src={BreadCrumbsIcon} alt="Назад">
            Персоналии
          </IconButton>
        </Link>
        <span className={s.text}>/ {text}</span>
      </div>
      <h1 className={s.title}>{title}</h1>
      <div className={s.formWrapper}>
        <UserForm
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmit={onSubmit}
          errors={errors}
          isValid={isValid}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};
