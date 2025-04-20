import { observer } from 'mobx-react-lite';
import Select, { MultiValue } from 'react-select';
import { useMemo } from 'react';

import { selectConfig } from '../../utils/selectConfig';
import { SORT_OPTIONS } from '../../utils/constants';
import { userFilterStore } from '../../stores';

export const SortSelect = observer(() => {

  const selectedSortValues = useMemo(() => {
    return userFilterStore.sortField
      .map(field => SORT_OPTIONS.find(opt => opt.value === field))
      .filter(Boolean);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFilterStore.sortField]);

  const handleSortChange = (selected: MultiValue<any>) => {
    const newFields = selected.map(opt => opt?.value);

    const uniqueFieldsMap = new Map<string, string>();

    for (const field of newFields) {
      const rawField = field.replace(/^-/, '');
      uniqueFieldsMap.set(rawField, field);
    }

    const dedupedFields = Array.from(uniqueFieldsMap.values());

    userFilterStore.setSortField(dedupedFields);
  };

  return (
    <Select
      isMulti
      styles={selectConfig}
      value={selectedSortValues}
      options={SORT_OPTIONS}
      onChange={handleSortChange}
      placeholder="Сортировка"
    />
  );
});
