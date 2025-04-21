import { observer } from 'mobx-react-lite';
import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { userDetailsStore } from '../../stores/UserDetailsStore';
import { formatUnixDate } from '../../utils/helpers';

import s from './UserDetailPage.module.css';

export const UserDetailPage = observer(() => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const userId = Number(id);
    if (Number.isInteger(userId) && userId > 0) {
      userDetailsStore.fetchUser(userId);
    }
  }, [id]);

  if (userDetailsStore.isLoading) return <div>Загрузка...</div>;
  if (userDetailsStore.error) return <div>Ошибка: {userDetailsStore.error}</div>;
  if (!userDetailsStore.user) return <div>Пользователь не найден</div>;

  const {
    name,
    surname,
    patronymic,
    email,
    phone,
    department,
    status,
    roles,
    administrative_position,
    medical_position,
    created_at,
    updated_at,
    fired_at,
    hired_at
  } = userDetailsStore.user;

  const fullName = `${surname} ${name} ${patronymic}`;

  const details = [
    { label: 'Email', value: email },
    { label: 'Телефон', value: phone },
    { label: 'Отделение', value: department?.label },
    { label: 'Статус', value: status?.label },
    { label: 'Роли', value: roles?.map(role => role.label).join(', ') },
    { label: 'Административная должность', value: administrative_position?.label },
    { label: 'Медицинская должность', value: medical_position?.label },
    { label: 'Дата создания', value: formatUnixDate(created_at) },
    { label: 'Дата обновления', value: formatUnixDate(updated_at) },
    { label: 'Дата приема на работу', value: formatUnixDate(hired_at) },
    { label: 'Дата увольнения', value: formatUnixDate(fired_at) }
  ];

  return (
    <div className={s.container}>
      <h1 className={s.title}>{fullName}</h1>
      <ul className={s.detailsGrid}>
        {details.map(({ label, value }) => (
          <Fragment key={label}>
            <li className={s.label}>{label}:</li>
            <li className={s.value}>{value || '—'}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
});
