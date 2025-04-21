import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  CopyTextWithTooltip,
  CustomTooltip,
  IconButton,
  MainModals,
  RolesItem,
  TooltipText
} from '..';
import { BlockedIcon, DeleteIcon, EditIcon, EyeIcon, UnblockedIcon } from '../../assets';
import { userStore } from '../../stores/UserStore';
import { UserStatus } from '../../types/types';
import { tableHeaders } from '../../utils/constants';
import { formatUnixDate } from '../../utils/helpers';

import s from './UsersTable.module.css';

export const UserTable = observer(() => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openBlock, setOpenBlock] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const users = userStore.users;

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const handleBlockClick = (id: string) => {
    setSelectedId(id);
    setOpenBlock(true);
  };

  if (userStore.isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={s.tableWrapper}>
      <MainModals
        isOpen={open}
        setOpen={setOpen}
        isOpenDel={openDelete}
        setOpenDel={setOpenDelete}
        userId={String(selectedId)}
        isOpenBlock={openBlock}
        setOpenBlock={setOpenBlock}
      />
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
              <td onClick={() => navigate(`/users/${user.id}`)}>
                <TooltipText
                  text={`${user.surname} ${user.name} ${user.patronymic}`}
                  tooltipId="info"
                  tooltipText={`${user.surname} ${user.name} ${user.patronymic}`}
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
                  <IconButton variant="ghost" src={EyeIcon} alt="Посмотреть" />
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
                <RolesItem roles={user.roles.map(r => r.label)} />
              </td>
              <td>
                <p>{user.status.label}</p>
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <p className={s.ellipsis}>{formatUnixDate(user.hired_at)}</p>
              </td>
              <td>
                <p className={s.ellipsis}>{formatUnixDate(user?.fired_at)}</p>
              </td>
              <td>
                <Button className={s.btnLight} variant="light" onClick={() => setOpen(true)}>
                  Уволить
                </Button>
              </td>

              <td>
                <CustomTooltip id="btn-edit" place="left" />
                <IconButton
                  src={EditIcon}
                  alt="Редактировать"
                  data-tooltip-id="btn-edit"
                  data-tooltip-content="Редактировать"
                  onClick={() => navigate(`users/${user.id}/edit`)}
                  className={s.iconBtn}
                />
              </td>
              {/* Блокировка */}
              <td>
                {user.status.value === UserStatus.BLOCKED ? (
                  <>
                    <CustomTooltip id="btn-unblock" place="left" />
                    <IconButton
                      variant="ghost"
                      src={UnblockedIcon}
                      alt="Разблокировать"
                      data-tooltip-id="btn-unblock"
                      data-tooltip-content="Разблокировать сотрудника"
                      className={s.iconBtn}
                    />
                  </>
                ) : (
                  <>
                    <CustomTooltip id="btn-block" place="left" />
                    <IconButton
                      src={BlockedIcon}
                      alt="Заблокировать"
                      data-tooltip-id="btn-block"
                      data-tooltip-content="Заблокировать сотрудника"
                      onClick={() => handleBlockClick(String(user.id))}
                      className={s.iconBtn}
                    />
                  </>
                )}
              </td>
              <td>
                <CustomTooltip id="btn-del" place="left" />
                <IconButton
                  src={DeleteIcon}
                  alt="Удалить"
                  data-tooltip-id="btn-del"
                  data-tooltip-content="Удалить сотрудника"
                  onClick={() => handleDeleteClick(String(user.id))}
                  className={s.iconBtn}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
