import { TouchableOpacityProps } from 'react-native';

type IDisabled = {
  disabled?: boolean;
};
type IProps = {
  label: string;
} & IDisabled &
  TouchableOpacityProps;

export type { IProps, IDisabled };
