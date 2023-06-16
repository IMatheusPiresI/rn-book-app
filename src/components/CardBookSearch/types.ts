import { TouchableOpacityProps } from 'react-native';

import { IBook } from '../../services/books/types';

type IProps = {
  book: IBook;
} & TouchableOpacityProps;

export type { IProps };
