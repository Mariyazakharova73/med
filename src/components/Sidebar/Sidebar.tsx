import { Link } from 'react-router-dom';

import { IconButton, MenuList } from '..';
import { ArrowCloseIcon, LogoIcon } from '../../assets';
import { RoutePath } from '../../routes';
import { LIST_DATA, LIST_DATA_INFO, LIST_DATA_WORK } from '../../utils/constants';

import s from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <IconButton
        className={s.closeBtn}
        variant="outline"
        src={ArrowCloseIcon}
        alt="Закрыть сайдбар"
      />
      <Link to={RoutePath.users} className={s.link}>
        <div className={s.logoWrapper}>
          <img className={s.logoImg} src={LogoIcon} alt="Логотип" />
          <div className={s.info}>
            <p className={s.logoName}>СБ21</p>
            <p className={s.logoText}>Секретарь ВКК</p>
          </div>
        </div>
      </Link>
      <MenuList title="Личный кабинет" menuData={LIST_DATA} />
      <MenuList title="Рабочее пространство" menuData={LIST_DATA_WORK} />
      <div className={s.infoWrapper}>
        <MenuList menuData={LIST_DATA_INFO} />
      </div>
    </aside>
  );
};
