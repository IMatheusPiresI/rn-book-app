import React, { useEffect } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import { LayoutAnimation, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import theme from '../../resources/styles/theme';
import { getBookImageURL } from '../../resources/utils/getBookImageURL';

import { IProps } from './types';
import * as S from './styles';

export const CardBookList: React.FC<IProps> = ({
  book,
  index = 0,
  scrollX = { value: 0 },
}) => {
  const navigation = useNavigation();
  const BOOK_WIDTH = theme.metrics.screenWidth * 0.32;
  const BOOK_SPACES = 16;
  const inputRange = [-BOOK_WIDTH, 0, BOOK_WIDTH, BOOK_WIDTH * 3];
  const position = useDerivedValue(
    () => (index + 0.00001) * (BOOK_WIDTH + BOOK_SPACES) - scrollX.value,
  );

  const handleGoToBookDetails = () => {
    const bookDetail = book;
    navigation.navigate('BookDetails', {
      book: bookDetail,
    });
  };

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
    <TouchableOpacity activeOpacity={0.8} onPress={handleGoToBookDetails}>
      <S.Container style={rAnimatedPerspectiveBook}>
        <S.ContainerImage>
          <SharedElement id={`item.${book.id}.image`} style={styles.container}>
            <S.ImageBook
              source={{
                uri: getBookImageURL(book),
              }}
              style={styles.imageBook}
              resizeMode="cover"
            />
          </SharedElement>
        </S.ContainerImage>
        <S.Title numberOfLines={1}>{book.volumeInfo.title}</S.Title>
      </S.Container>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
  },
  imageBook: {
    width: theme.metrics.screenWidth * 0.32,
    height: theme.metrics.screenHeight * 0.24,
    borderRadius: 12,
  },
});
