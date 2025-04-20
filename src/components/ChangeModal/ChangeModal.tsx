import cn from 'classnames';
import { FC, useState } from 'react';

import { EyeIcon, EyeOffIcon } from '../../assets';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { Modal } from '../Modal/Modal';

import s from './ChangeModal.module.css';

interface ModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export const ChangeModal: FC<ModalProps> = ({ isOpen, setOpen }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!oldPassword) {
      setOldPasswordError('Введите старый пароль');
      isValid = false;
    } else {
      setOldPasswordError('');
    }

    if (!newPassword) {
      setNewPasswordError('Введите новый пароль');
      isValid = false;
    } else if (newPassword.length < 8) {
      setNewPasswordError('Пароль должен быть не короче 8 символов');
      isValid = false;
    } else {
      setNewPasswordError('');
    }

    if (!isValid) return;

    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    alert('Пароль успешно изменён!');
    setLoading(false);
    setOpen(false);
    
    setOldPassword('');
    setNewPassword('');
  };

  return (
    <div>
      <Modal
        modalWithForm={true}
        isOpen={isOpen}
        title="Изменение пароля"
        actionLabel="Сохранить и выйти"
        onClose={() => setOpen(false)}
        onAction={() => {
          alert('Пароль изменен');
          setOpen(false);
        }}
      >
        <form className={cn(s.form, '')} onSubmit={handleSubmit} noValidate>
          <FormInput
            name="oldPassword"
            type={showPassword ? 'text' : 'password'}
            onChange={e => setOldPassword(e.target.value)}
            value={oldPassword}
            error={oldPasswordError}
            placeholder="Введите старый пароль"
            minLength={8}
            icon={oldPassword ? (showPassword ? EyeOffIcon : EyeIcon) : undefined}
            action={oldPassword ? () => setShowPassword(prev => !prev) : undefined}
          />
          <FormInput
            name="newPassword"
            type={showNewPassword ? 'text' : 'password'}
            onChange={e => setNewPassword(e.target.value)}
            value={newPassword}
            error={newPasswordError}
            placeholder="Введите новый пароль"
            minLength={8}
            icon={newPassword ? (showNewPassword ? EyeOffIcon : EyeIcon) : undefined}
            action={newPassword ? () => setShowNewPassword(prev => !prev) : undefined}
          />
          <Button type="submit" disabled={false} className={s.btn}>
            {loading ? 'Сохраняем...' : 'Сохранить изменения'}
          </Button>
        </form>
      </Modal>
    </div>
  );
};
