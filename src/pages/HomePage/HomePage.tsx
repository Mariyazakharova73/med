import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { Button, Tabs, UserFilterForm, UserTable } from '../../components';
import { userFilterStore } from '../../stores/UserFilterStore';
import { userStore } from '../../stores/UserStore';

import s from './HomePage.module.css';

export const HomePage = observer(() => {
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
        <Button>Добавить сотрудника</Button>
      </div>
      <UserFilterForm />
      <UserTable />
    </main>
  );
});
