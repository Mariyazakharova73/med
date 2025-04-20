import {
  AboutIcon,
  CalendarIcon,
  DocsIcon,
  MoneyIcon,
  StarIcon,
  StructureIcon,
  UserIcon
} from '../assets';
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

export const FORM_FIELDS = [
  {
    type: 'input',
    label: 'Фамилия',
    name: 'surname',
    placeholder: 'Введите фамилию',
    validation: {
      required: true,
      minLength: 2
    }
  },
  {
    type: 'input',
    label: 'Имя',
    name: 'name',
    placeholder: 'Введите имя',
    validation: {
      required: true,
      minLength: 2
    }
  },
  {
    type: 'input',
    label: 'Отчество',
    name: 'patronymic',
    placeholder: 'Введите отчество',
    validation: {
      required: true,
      minLength: 2
    }
  },
  {
    type: 'select',
    label: 'Административная должность',
    name: 'administrative_position',
    placeholder: 'Выберите должность',
    validation: {
      required: true
    },
    options: [
      {
        value: 'DIRECTOR',
        type: 'administrative',
        label: 'Директор'
      },
      {
        value: 'MANAGER',
        type: 'administrative',
        label: 'Менеджер'
      }
    ]
  },
  {
    type: 'select',
    label: 'Медицинская должность',
    placeholder: 'Выберите должность',
    name: 'medical_position',
    validation: {
      required: true
    },
    options: [
      {
        value: 'DENTIST',
        type: 'medical',
        label: 'Стоматолог'
      },
      {
        value: 'NURSE',
        type: 'medical',
        label: 'Медсестра'
      }
    ]
  },
  {
    type: 'select',
    label: 'Подразделение',
    placeholder: 'Выберите подразделение',
    name: 'department',
    validation: {
      required: true
    },
    options: [
      {
        value: 'surgery',
        label: 'Хирургия'
      },
      {
        value: 'therapy',
        label: 'Терапия'
      },
      {
        value: 'accounting',
        label: 'Бухгалтерия'
      }
    ]
  },
  {
    type: 'text',
    label: 'Телефон',
    name: 'phone',
    placeholder: '7••••••••••',
    validation: {
      required: true,
      minLength: 11,
      maxLength: 11,
    }
  },
  {
    type: 'email',
    label: 'E-mail',
    name: 'email',
    placeholder: 'Введите ваш E-mail',
    validation: {
      required: true
    }
  }
];


export const SORT_OPTIONS = [
  { value: 'id', label: 'ID ↑' },
  { value: '-id', label: 'ID ↓' },
  { value: 'name', label: 'Имя ↑' },
  { value: '-name', label: 'Имя ↓' },
  { value: 'surname', label: 'Фамилия ↑' },
  { value: '-surname', label: 'Фамилия ↓' },
  { value: 'patronymic', label: 'Отчество ↑' },
  { value: '-patronymic', label: 'Отчество ↓' }
];
