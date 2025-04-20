import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Tabs, UserFilterForm, UserTable } from '../../components';
import { userFilterStore } from '../../stores/UserFilterStore';
import { userStore } from '../../stores/UserStore';
import { RoutePath } from '../../routes';

import s from './HomePage.module.css';

export const HomePage = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    const dispose = reaction(
      () => ({
        isReady: userFilterStore.isReady,
        name: userFilterStore.name,
        surname: userFilterStore.surname,
        patronymic: userFilterStore.patronymic,
        sortField: userFilterStore.sortField
      }),
      ({ isReady }) => {
        if (isReady) {
          userStore.fetchUsers();
        }
      },
      { fireImmediately: true }
    );

    return () => {
      dispose();
    };
  }, []);

  return (
    <main>
      <Tabs />
      <div className={s.titleWrapper}>
        <h1 className={s.title}>Штатное расписание</h1>
        <Button onClick={() => navigate(RoutePath.create_user)}>Добавить сотрудника</Button>
      </div>
      <UserFilterForm />
      <UserTable />
    </main>
  );
});
