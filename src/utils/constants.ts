import { AboutIcon, CalendarIcon, DocsIcon, MoneyIcon, StarIcon, StructureIcon, UserIcon } from '../assets';
import s from '../components/UsersTable/UsersTable.module.css';

export const tableHeaders = [
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

export const LIST_DATA = [
  {
    id: 0,
    name: 'Структура ВКК',
    icon: StructureIcon
  },
  {
    id: 1,
    name: 'Организация',
    icon: UserIcon
  },
  {
    id: 2,
    name: 'Реестр документов ВКК',
    icon: DocsIcon
  },
  {
    id: 3,
    name: 'Календарь ВКК',
    icon: CalendarIcon
  },
  {
    id: 4,
    name: 'Тарифы и оплата',
    icon: MoneyIcon
  }
];

export const LIST_DATA_WORK = [
  {
    id: 0,
    name: 'Руководитель МО',
    icon: StarIcon
  },
  {
    id: 1,
    name: 'Ответственное лицо',
    icon: StarIcon
  },
  {
    id: 2,
    name: 'Уполномоченное лицо',
    icon: StarIcon
  },
  {
    id: 3,
    name: 'Секретарь ВК',
    icon: StarIcon
  },
  {
    id: 4,
    name: 'Член ВК',
    icon: StarIcon
  },
  {
    id: 5,
    name: 'Администратор клиники',
    icon: StarIcon
  }
];

export const LIST_DATA_INFO = [
  {
    id: 0,
    name: 'О сервисе',
    icon: AboutIcon
  }
];
