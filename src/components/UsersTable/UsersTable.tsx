import cn from 'classnames';
import { observer } from 'mobx-react-lite';

import { Button, CopyTextWithTooltip, CustomTooltip, IconButton, RolesItem, TooltipText } from '..';
import blockedBtn from '../../assets/blocked.svg';
import deleteBtn from '../../assets/delete.svg';
import editBtn from '../../assets/edit.svg';
import eyeBtn from '../../assets/eye.svg';
import unblockedBtn from '../../assets/unblocked.svg';
import { userStore } from '../../stores/UserStore';

import s from './UsersTable.module.css';

const tableHeaders = [
  { label: '', className: '' },
  { label: 'ФИО', className: s.ellipsis },
  { label: 'Телефон', className: s.ellipsis },
  { label: 'E-mail', className: s.ellipsis },
  { label: 'Пароль', className: s.ellipsis },
  { label: 'Должность', className: s.ellipsis },
  { label: 'Роль в ВКК', className: s.fullWidth },
  { label: 'Статус УЗ', className: s.ellipsis },
  { label: 'ПЭП', className: s.ellipsis },
  { label: 'Дата принятия на работу', className: s.ellipsis },
  { label: 'Дата увольнения', className: s.ellipsis },
  { label: '', className: '' },
  { label: '', className: '' },
  { label: '', className: '' },
  { label: '', className: '' }
];

export const UserTable = observer(() => {
  const users = userStore.users;

  if (userStore.isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead>
          <tr className={cn(s.tableRowHeader)}>
            {tableHeaders.map((header, index) => (
              <th key={index}>
                {header.label ? <p className={header.className}>{header.label}</p> : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              {/* ФИО */}
              <td>
                <TooltipText
                  text={`${user.surname} ${user.name} ${user.patronymic}`}
                  tooltipId="info"
                  tooltipText={user.hired_at}
                />
              </td>
              {/* Телефон */}
              <td>
                <CopyTextWithTooltip text={user.phone} tooltipId={`copy-phone-${user.id}`} />
              </td>
              {/* E-mail */}
              <td>
                <CopyTextWithTooltip text={user.email} tooltipId={`copy-email-${user.id}`} />
              </td>
              {/* Пароль */}
              <td>
                <div className={s.flexItem}>
                  <p className={s.ellipsisSmall}>••••••••</p>
                  <IconButton variant="ghost" src={eyeBtn} alt="Посмотреть" />
                </div>
              </td>
              {/* Должность */}
              <td>
                <TooltipText
                  text={user.administrative_position?.label}
                  tooltipId="position"
                  tooltipText={user.medical_position?.label || 'Нет должности'}
                  ellipsis={false}
                />
              </td>
              <td>
                <RolesItem roles={user.roles.map(r => r)} />
              </td>
              <td>
                <p>{user.status.label}</p>
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <p className={s.ellipsis}>{user.hired_at}</p>
              </td>
              <td>
                <p className={s.ellipsis}>{user.fired_at}</p>
              </td>
              <td>
                <Button size="light">Уволить</Button>
              </td>
              <td>
                <CustomTooltip id="btn-edit" place="left" />
                <IconButton
                  src={editBtn}
                  alt="Редактировать"
                  data-tooltip-id="btn-edit"
                  data-tooltip-content="Редактировать"
                />
              </td>
              <td>
                {false ? (
                  <>
                    <CustomTooltip id="btn-unblock" place="left" />
                    <IconButton
                      variant="ghost"
                      src={unblockedBtn}
                      alt="Разблокировать"
                      data-tooltip-id="btn-unblock"
                      data-tooltip-content="Разблокировать сотрудника"
                    />
                  </>
                ) : (
                  <>
                    <CustomTooltip id="btn-block" place="left" />
                    <IconButton
                      src={blockedBtn}
                      alt="Заблокировать"
                      data-tooltip-id="btn-block"
                      data-tooltip-content="Заблокировать сотрудника"
                    />
                  </>
                )}
              </td>
              <td>
                <CustomTooltip id="btn-del" place="left" />
                <IconButton
                  src={deleteBtn}
                  alt="Удалить"
                  data-tooltip-id="btn-del"
                  data-tooltip-content="Удалить сотрудника"
                  onClick={() => userStore.deleteUser(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
