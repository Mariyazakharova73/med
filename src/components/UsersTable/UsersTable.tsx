import cn from 'classnames';
import { observer } from 'mobx-react-lite';

import { userStore } from '../../stores/UserStore';

import s from './UsersTable.module.css';

export const UserTable = observer(() => {
  const users = userStore.users;

  if (userStore.isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <table className={s.table}>
      <thead>
        <tr className={cn(s.tableHeader, s.tableFlex)}>
          {/* <th onClick={() => userFilterStore.setSortField('id')}>ID</th>
          <th onClick={() => userFilterStore.setSortField('surname')}>Фамилия</th>
          <th onClick={() => userFilterStore.setSortField('name')}>Имя</th>
          <th onClick={() => userFilterStore.setSortField('patronymic')}>Отчество</th> */}
          <th></th>
          <th>ФИО</th>
          <th>Телефон</th>
          <th>E-mail</th>
          <th>Пароль</th>
          <th>Должность</th>
          <th>Роль в ВКК</th>
          <th>Статус УЗ</th>
          <th>ПЭП</th>
          <th>Дата принятия на работу</th>
          <th>Дата увольнения</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr сlassName={s.tableBodyRow} key={user.id}>
            <td>
              <input type="checkbox" />
              {user.id}
            </td>
            <td>
              {user.surname} {user.name} {user.patronymic}
            </td>
            <td>{user.phone}</td>
            <td></td>
            <td>
              <button onClick={() => userStore.setSelectedUser(user)}>Подробнее</button>
              <button onClick={() => userStore.deleteUser(user.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
