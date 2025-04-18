import cn from 'classnames';
import { FC } from 'react';

import { IconButton } from '..';
import toggleMenuBtn from '../../assets/toggleMenu.svg';

import s from './MenuList.module.css';

export interface MenuListProps {
  title?: string;
  menuData: { id: number; name: string; icon: string }[];
}

export const MenuList: FC<MenuListProps> = ({ title, menuData }) => {
  return (
    <div className={s.menuWrapper}>
      {title && (
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{title}</h2>
          <IconButton src={toggleMenuBtn} alt="icon" />
        </div>
      )}
      <ul className={s.menuList}>
        {menuData?.map(item => (
          <li
            className={cn(s.item, {
              [s.itemActive]: item.name === 'Организация'
            })}
            key={item.id}
          >
            <img src={item.icon} alt={item.name} className={s.itemImg} />
            <span className={s.itemName}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
