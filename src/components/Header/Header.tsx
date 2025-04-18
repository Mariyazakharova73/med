import { Badge, CustomTooltip, IconButton } from '..';
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
        <IconButton variant="ghost" src={toggleMenuBtn} alt="icon" />
      </div>
      <div className={s.profileInfo}>
        <div>
          <CustomTooltip id="Notification" place="bottom" />
          <IconButton
            src={Notification}
            alt="Уведомления"
            data-tooltip-id="Notification"
            data-tooltip-content="Уведомления"
          />
        </div>
        <div>
          <CustomTooltip id="message" place="bottom" />
          <IconButton
            src={Message}
            alt="Сообщения"
            data-tooltip-id="message"
            data-tooltip-content="Сообщения"
          />
        </div>
        <div className={s.divider}></div>
        <Badge color="pink" className={s.badge}>
          Руководитель МО
        </Badge>
        <div>
          <CustomTooltip id="profile" place="bottom" />
          <IconButton
            src={Profile}
            alt="Сообщения"
            data-tooltip-id="profile"
            data-tooltip-content="Профиль"
          />
        </div>
      </div>
    </header>
  );
};
