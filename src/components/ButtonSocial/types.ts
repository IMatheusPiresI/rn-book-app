import { TouchableOpacityProps } from 'react-native';

type IProps = {
  type: 'Google';
  loading?: boolean;
} & TouchableOpacityProps;

export type { IProps };
