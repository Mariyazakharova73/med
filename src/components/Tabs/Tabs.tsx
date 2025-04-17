import cn from 'classnames';

import s from './Tabs.module.css';

const TABS_LIST = [
  'Карточка организации',
  'Обособленные подразделения',
  'Штатное расписание',
  'Исполнительный орган по ВККиБМД',
  'Мониторинг'
];

export const Tabs = () => {
  return (
    <ul className={s.tabs}>
      {TABS_LIST.map((tab, index) => (
        <li
          className={cn(s.tabItem, {
            [s.tabItemActive]: index === 2
          })}
          key={index}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};
