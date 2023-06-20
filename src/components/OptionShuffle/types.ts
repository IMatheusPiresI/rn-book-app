import { TouchableOpacityProps } from 'react-native';

type IProps = {
  title: string;
  isSelected: boolean;
} & TouchableOpacityProps;

export type { IProps };
