import { TextInputProps } from 'react-native';

type ITypeInput = {
  type?: 'password';
};

type IProps = {
  label: string;
  icon: string;
} & ITypeInput &
  TextInputProps;

export type { IProps, ITypeInput };
