import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import Select, { SingleValue } from 'react-select';

import { userFilterStore } from '../../stores';
import { userStore } from '../../stores/UserStore';
import { selectConfig } from '../../utils/selectConfig';
import { ReactSelectOption } from '../../types/types';



export const NameSelect = observer(() => {
  const users = userStore.users;

  const options = useMemo(() => {
    return users?.map(user => ({
      label: `${user.name} ${user.surname} ${user.patronymic}`,
      value: JSON.stringify({
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic
      })
    }));
  }, [users]);

  const selectedValue = useMemo(() => {
    if (!userFilterStore.name && !userFilterStore.surname && !userFilterStore.patronymic) {
      return null;
    }

    const matched = options?.find(opt => {
      const { name, surname, patronymic } = JSON.parse(opt.value);
      return (
        name === userFilterStore.name &&
        surname === userFilterStore.surname &&
        patronymic === userFilterStore.patronymic
      );
    });

    return matched || null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, userFilterStore.name, userFilterStore.surname, userFilterStore.patronymic]);

  const handleChange = (option: SingleValue<ReactSelectOption>) => {
    if (option) {
      const parsed = JSON.parse(option.value);
      userFilterStore.setFilters(parsed);
    } else {
      userFilterStore.setFilters({
        name: '',
        surname: '',
        patronymic: ''
      });
    }
  };

  return (
    <Select
      isClearable
      styles={selectConfig}
      value={selectedValue}
      options={options}
      onChange={handleChange}
      placeholder="Поиск по ФИО"
    />
  );
});
