import { IconButton, MenuList } from '..';
import ArrowClose from '../../assets/arrow-close.svg';
import Logo from '../../assets/logo.svg';
import { LIST_DATA, LIST_DATA_INFO, LIST_DATA_WORK } from '../../utils/constants';

import s from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <IconButton className={s.closeBtn} variant="outline" src={ArrowClose} alt="Закрыть сайдбар" />
      <div className={s.logoWrapper}>
        <img className={s.logoImg} src={Logo} alt="Логотип" />
        <div className={s.info}>
          <p className={s.logoName}>СБ21</p>
          <p className={s.logoText}>Секретарь ВКК</p>
        </div>
      </div>
      <MenuList title="Личный кабинет" menuData={LIST_DATA} />
      <MenuList title="Рабочее пространство" menuData={LIST_DATA_WORK} />
      <div className={s.infoWrapper}>
        <MenuList menuData={LIST_DATA_INFO} />
      </div>
    </aside>
  );
};
