import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChangeModal, UserFormWrapper } from '../../components';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { userDetailsStore } from '../../stores/UserDetailsStore';
import { userStore } from '../../stores/UserStore';

export const EditUserPage = observer(() => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const { id } = useParams<{ id: string }>();

  const { values, handleChange, errors, isValid, handleBlur, setValues } = useFormAndValidation();

  useEffect(() => {
    if (id) {
      userDetailsStore.fetchUser(Number(id)).then(() => {
        if (userDetailsStore.user) {
          const data = {
            name: userDetailsStore.user.name,
            surname: userDetailsStore.user.surname,
            patronymic: userDetailsStore.user.patronymic,
            email: userDetailsStore.user.email,
            phone: userDetailsStore.user.phone,
            department: userDetailsStore.user.department.value,
            administrative_position: userDetailsStore.user.administrative_position?.value,
            medical_position: userDetailsStore.user.medical_position?.value,
            is_simple_digital_sign_enabled: userDetailsStore.user.is_simple_digital_sign_enabled,
            hired_at: userDetailsStore.user.hired_at
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setValues(data as any);
        }
      });
    }
  }, [id, setValues]);

  const onSubmit = async () => {
    try {
      await userStore.updateUser(Number(id), values);
      console.log('Пользователь успешно oбновлен');
    } catch (e) {
      console.error('Ошибка при обновлении пользователя', e);
    }
  };

  return (
    <>
      <div>
        <UserFormWrapper
          text="Редактирование карточки сотрудника"
          title="ФИО"
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmit={onSubmit}
          errors={errors}
          isValid={isValid}
          setOpen={setOpenChangePassword}
        />
      </div>
      <ChangeModal isOpen={openChangePassword} setOpen={setOpenChangePassword} />
    </>
  );
});
