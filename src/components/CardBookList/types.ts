import { SharedValue } from 'react-native-reanimated';

import { IBook } from '../../services/books/types';

type IProps = {
  book: IBook;
  index: number;
  scrollX: SharedValue<number>;
};

export type { IProps };
