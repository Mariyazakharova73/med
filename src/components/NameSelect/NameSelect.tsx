import Select from "react-select";
import { observer } from "mobx-react-lite";
import { useMemo } from 'react';

import { userStore } from '../../stores/UserStore';
import { userFilterStore } from '../../stores';
import { selectConfig } from '../../utils/selectConfig';

export const NameSelect = observer(() => {
  const users = userStore.users;

  const options = useMemo(() => {
    return users?.map((user) => ({
      label: `${user.name} ${user.surname} ${user.patronymic}`,
      value: JSON.stringify({
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic,
      }),
    }));
  }, [users]);

  const selectedValue = useMemo(() => {
    if (!userFilterStore.name && !userFilterStore.surname && !userFilterStore.patronymic) {
      return null;
    }

    const matched = options?.find((opt) => {
      const { name, surname, patronymic } = JSON.parse(opt.value);
      return (
        name === userFilterStore.name &&
        surname === userFilterStore.surname &&
        patronymic === userFilterStore.patronymic
      );
    });

    return matched || null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    options,
    userFilterStore.name,
    userFilterStore.surname,
    userFilterStore.patronymic,
  ]);

  // Обработчик выбора
  const handleChange = (option: any) => {
    if (option) {
      const parsed = JSON.parse(option.value);
      userFilterStore.setFilters(parsed);
    } else {
      userFilterStore.setFilters({
        name: "",
        surname: "",
        patronymic: "",
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
