import { GroupBase, StylesConfig } from 'react-select';
export type OptionType = {
  label: string;
  value: string;
};

export const selectConfig: StylesConfig<OptionType, true, GroupBase<OptionType>> = {
  control: base => ({
    ...base,
    backgroundColor: '#f4f6f9',
    borderRadius: '16px',
    borderColor: '#f4f6f9',
    minHeight: '56px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#006bff'
    }
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: '#E8ECF6',
    borderRadius: '8px'
  }),
  multiValueLabel: base => ({
    ...base,
    color: '#222'
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#E8ECF6' : '#f4f6f9',
    color: '#222',
    borderBottom: '1px solid #d4d9e4'
  })
};
