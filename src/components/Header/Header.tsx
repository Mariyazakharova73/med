import { Badge, CustomTooltip, IconButton } from '..';
import { MessageIcon, NotificationIcon, ProfileIcon, ToggleMenuIcon } from '../../assets';

import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.select}>
        <span className={s.selectText}>Выберите подразделение</span>
        <IconButton src={ToggleMenuIcon} alt="icon" />
      </div>
      <div className={s.profileInfo}>
        <div>
          <CustomTooltip id="Notification" place="bottom" />
          <IconButton
            src={NotificationIcon}
            alt="Уведомления"
            data-tooltip-id="Notification"
            data-tooltip-content="Уведомления"
          />
        </div>
        <div>
          <CustomTooltip id="message" place="bottom" />
          <IconButton
            src={MessageIcon}
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
            src={ProfileIcon}
            alt="Сообщения"
            data-tooltip-id="profile"
            data-tooltip-content="Профиль"
          />
        </div>
      </div>
    </header>
  );
};
