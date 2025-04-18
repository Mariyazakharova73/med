import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Button, IconButton } from '..';
import { CloseIcon } from '../../assets';

import s from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  title: string;
  actionLabel?: string;
  onClose: () => void;
  onAction: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  title,
  actionLabel = 'Уволить',
  onClose,
  onAction,
  children
}: ModalProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={e => e.stopPropagation()}>
        <div className={s.header}>
          <h2 className={s.title}>{title}</h2>
          <IconButton
            className={s.closeBtn}
            variant="outline"
            src={CloseIcon}
            alt="Закрыть"
            onClick={onClose}
          />
        </div>

        <div className={s.body}>{children}</div>

        <div className={s.footer}>
          <Button className={s.actionBtn} onClick={onAction} variant="light">
            {actionLabel}
          </Button>
          <Button className={s.actionBtn} onClick={onClose}>Отмена</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
