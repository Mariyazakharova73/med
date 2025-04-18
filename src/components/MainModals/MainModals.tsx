import { FC } from 'react';

import { userStore } from '../../stores/UserStore';
import { Modal } from '../Modal/Modal';

interface ModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  isOpenDel: boolean;
  setOpenDel: (value: boolean) => void;
  userId: string;
  isOpenBlock: boolean;
  setOpenBlock: (value: boolean) => void;

}

export const MainModals: FC<ModalProps> = ({
  isOpen,
  setOpen,
  isOpenDel,
  setOpenDel,
  userId,
  isOpenBlock,
  setOpenBlock,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        title="Увольнение сотрудника"
        actionLabel="Уволить"
        onClose={() => setOpen(false)}
        onAction={() => {
          alert('Сотрудник уволен');
          setOpen(false);
        }}
      >
        <p>Это действие будет невозможно отменить. Вы действительно хотите уволить сотрудника?</p>
        <p>
          Он навсегда потеряет доступ к своей учетной записи, если таковая была. Все созданные им
          документы и сделанные изменения в документах сохранятся. Также карточка данного сотрудника
          будет храниться в вашей базе данных.
        </p>
      </Modal>
      <Modal
        isOpen={isOpenDel}
        title="Удаление карточки сотрудника"
        actionLabel="Удалить карточку"
        onClose={() => setOpenDel(false)}
        onAction={() => {
          userStore.deleteUser(Number(userId));
          setOpenDel(false);
        }}
      >
        <p>
          Это действие будет невозможно отменить. Вы действительно хотите удалить карточку
          сотрудника?
        </p>
        <p>
          Это действие будет невозможно отменить. Вы действительно хотите удалить карточку
          сотрудника? После этого сотрудник навсегда потеряет доступ к своей учетной записи, если
          таковая существует. Также карточка данного сотрудника будет безвозвратно удалена из вашей
          базы данных. Все созданные им документы и сделанные изменения в документах сохранятся.
        </p>
      </Modal>
      <Modal
        isOpen={isOpenBlock}
        title="Блокировка сотрудника"
        actionLabel="Заблокировать"
        onClose={() => setOpenBlock(false)}
        onAction={() => {
          setOpenBlock(false);
          alert('Сотрудник заблокирован');
        }}
      >
        <p>Это действие будет можно отменить. Вы действительно хотите заблокировать сотрудника?</p>
        <p>
          На время блокировки сотрудник потеряет доступ к своей учётной записи, если таковая
          существует. Все созданные им документы и сделанные изменения в документах сохранятся.
          Также карточка данного сотрудника будет храниться в вашей базе данных.
        </p>
      </Modal>
    </div>
  );
};
