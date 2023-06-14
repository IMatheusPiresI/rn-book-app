import React, { useEffect } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import { LayoutAnimation, TouchableOpacity } from 'react-native';

import theme from '../../resources/styles/theme';
import { getBookImageURL } from '../../resources/utils/getBookImageURL';

import { IProps } from './types';
import * as S from './styles';

export const CardBookList: React.FC<IProps> = ({ book, index, scrollX }) => {
  const BOOK_WIDTH = theme.metrics.screenWidth * 0.32;
  const BOOK_SPACES = 16;
  const position = useDerivedValue(
    () => (index + 0.00001) * (BOOK_WIDTH + BOOK_SPACES) - scrollX.value,
  );
  const inputRange = [-BOOK_WIDTH, 0, BOOK_WIDTH, BOOK_WIDTH * 3];

  const rAnimatedPerspectiveBook = useAnimatedStyle(() => ({
    width: theme.metrics.screenWidth * 0.32,
    transform: [
      { perspective: 800 },
      {
        scale: interpolate(
          position.value,
          inputRange,
          [0.8, 1, 1, 1],
          Extrapolate.CLAMP,
        ),
      },
      {
        rotateY: `${interpolate(
          position.value,
          inputRange,
          [60, 0, 0, 0],
          Extrapolate.CLAMP,
        )}deg`,
      },
    ],
  }));

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <S.Container style={rAnimatedPerspectiveBook}>
        <S.ContainerImage>
          <S.ImageBook
            source={{
              uri: getBookImageURL(book),
            }}
            resizeMode="cover"
          />
        </S.ContainerImage>
        <S.BoxAuthor>
          <S.Author numberOfLines={2}>{book.volumeInfo.title}</S.Author>
        </S.BoxAuthor>
      </S.Container>
    </TouchableOpacity>
  );
};
