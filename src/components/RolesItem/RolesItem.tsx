import { Badge, CustomTooltip, IconButton } from '..';
import { ToggleMenuIcon } from '../../assets';

import s from './RolesItem.module.css';

interface Props {
  roles?: string[];
}

export const RolesItem = ({ roles = [] }: Props) => {
  if (roles.length === 0) {
    return <Badge color="gray">Нет ролей</Badge>;
  }

  if (roles.length === 1) {
    return <Badge color="gray">{roles[0]}</Badge>;
  }

  return (
    <>
      <Badge color="gray" className={s.roles}>
        Несколько ролей
        <IconButton
          className={s.icon}
          data-tooltip-id="roles-tooltip"
          src={ToggleMenuIcon}
          alt="Показать все роли"
        />
      </Badge>

      <CustomTooltip id="roles-tooltip" place="bottom" className={s.tooltip}>
        <div className={s.rolesWrapper}>
          {roles.map(role => (
            <Badge key={role} color="pink">
              {role}
            </Badge>
          ))}
        </div>
      </CustomTooltip>
    </>
  );
};
