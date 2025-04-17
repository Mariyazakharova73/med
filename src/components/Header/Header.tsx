import { Badge, IconButton } from '..';
import Message from '../../assets/message.svg';
import Notification from '../../assets/notification.svg';
import Profile from '../../assets/profile.svg';
import toggleMenuBtn from '../../assets/toggleMenu.svg';

import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.select}>
        <span className={s.selectText}>Выберите подразделение</span>
        <IconButton
          variant="ghost"
          icon={<img className={s.icon} src={toggleMenuBtn} alt="icon" />}
        />
      </div>
      <div className={s.profileInfo}>
        <img className={s.profileIcon} src={Notification} alt="Notification" />
        <img className={s.profileIcon} src={Message} alt="Message" />
        <div className={s.divider}></div>
        <Badge color="pink" className={s.badge}>
          Руководитель МО
        </Badge>
        <img className={s.profileIcon} src={Profile} alt="Profile" />
      </div>
    </header>
  );
};
