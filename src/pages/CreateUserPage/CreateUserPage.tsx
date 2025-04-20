import { UserFormWrapper } from '../../components';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { userStore } from '../../stores/UserStore';

export const CreateUserPage = () => {
  const { values, handleChange, errors, isValid, resetForm, handleBlur } = useFormAndValidation();

  const onSubmit = async () => {
    try {
      await userStore.addUser(values);
      resetForm();
      console.log('Пользователь успешно добавлен');
    } catch (e) {
      console.error('Ошибка при сохранении пользователя', e);
    }
  };

  return (
    <div>
      <UserFormWrapper
        text="Добавление нового сотрудника"
        title="Основные данные сотрудника"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        onSubmit={onSubmit}
        errors={errors}
        isValid={isValid}
      />
    </div>
  );
};
