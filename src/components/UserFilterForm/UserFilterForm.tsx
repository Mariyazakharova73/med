import { observer } from 'mobx-react-lite';

import { NameSelect, SortSelect } from '..';

import s from './UserFilterForm.module.css';

export const UserFilterForm = observer(() => {
  return (
    <div className={s.wrapper}>
      <div className={s.filters}>
        <div>
          <NameSelect />
        </div>
        <div>
          <SortSelect />
        </div>
      </div>
      <div className={s.checkboxContainer}>
        <div className={s.checkboxWrapper}>
          <input type="checkbox" />
          <label>Выбрать всех</label>
        </div>
        <div className={s.checkboxWrapper}>
          <input type="checkbox" />
          <label>Отображать уволенных</label>
        </div>
        <div className={s.checkboxWrapper}>
          <input type="checkbox" />
          <label>Отображать заблокированных</label>
        </div>
      </div>
    </div>
  );
});
