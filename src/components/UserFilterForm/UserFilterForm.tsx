import { observer } from 'mobx-react-lite';

import { userFilterStore } from '../../stores/UserFilterStore';


export const UserFilterForm = observer(() => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        placeholder="Имя"
        value={userFilterStore.name}
        onChange={e => userFilterStore.setFilters({ name: e.target.value })}
      />
      <input
        placeholder="Фамилия"
        value={userFilterStore.surname}
        onChange={e => userFilterStore.setFilters({ surname: e.target.value })}
      />
      <input
        placeholder="Отчество"
        value={userFilterStore.patronymic}
        onChange={e => userFilterStore.setFilters({ patronymic: e.target.value })}
      />
    </div>
  );
});