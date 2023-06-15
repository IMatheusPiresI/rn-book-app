import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Linking, StyleSheet } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';

import { IconBase } from '../../components/IconBase';
import theme from '../../resources/styles/theme';
import { formatDateEN } from '../../resources/utils/formatDateEN';
import { getBookImageURL } from '../../resources/utils/getBookImageURL';
import { IBook } from '../../services/books/types';

import * as S from './styles';

export const BookDetails = () => {
  const HEADER_HEIGHT =
    theme.metrics.screenHeight * 0.3 + theme.metrics.statusBarHeight;
  const contentAnimation = useSharedValue(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { book } = route.params as { book: IBook };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const rAnimatedContent = useAnimatedStyle(() => ({
    height: theme.metrics.screenHeight - HEADER_HEIGHT + 30,
    bottom: interpolate(
      contentAnimation.value,
      [0, 1],
      [-theme.metrics.screenHeight, 0],
    ),
  }));

  useLayoutEffect(() => {
    contentAnimation.value = withTiming(1, { duration: 400 });
  }, [contentAnimation]);

  const openLinkReadBookWeb = () => {
    const url = book.volumeInfo.previewLink.replace('http', 'https');
    console.log(url);
    Linking.openURL(url);
  };

  console.log(book.volumeInfo.previewLink);

  return (
    <S.Container>
      <S.Header>
        <S.LimitBackgroundImage>
          <S.BackgroundImage
            source={{
              uri: getBookImageURL(book),
            }}
            resizeMode="cover"
            blurRadius={5}
          />
        </S.LimitBackgroundImage>
        <S.WrapperGoBack>
          <S.ButtonGoBack onPress={handleGoBack}>
            <IconBase
              name="arrow-back"
              size={24}
              color={theme.colors.primary}
            />
          </S.ButtonGoBack>
        </S.WrapperGoBack>
        <S.BoxImage>
          <SharedElement id={`item.${book.id}.image`} style={styles.container}>
            <S.BookImage
              source={{
                uri: getBookImageURL(book),
              }}
            />
          </SharedElement>
        </S.BoxImage>
      </S.Header>
      <S.Content style={rAnimatedContent}>
        <S.ScrollContent bounces={false}>
          <S.HeaderContent>
            <S.TitleBook>{book.volumeInfo.title}</S.TitleBook>
            <S.AuthorName>
              {book.volumeInfo?.authors && book.volumeInfo.authors[0]}
            </S.AuthorName>
            <S.WrapperBookInfo>
              <S.BoxInfo>
                <S.TitleInfo>Ratings</S.TitleInfo>
                <S.Info>
                  {book.volumeInfo.averageRating ?? 'Unavaliable'}
                </S.Info>
              </S.BoxInfo>
              <S.BoxInfoWithBorder>
                <S.TitleInfo>Pages</S.TitleInfo>
                <S.Info>{book.volumeInfo.pageCount ?? 'Unavaliable'}</S.Info>
              </S.BoxInfoWithBorder>
              <S.BoxInfoWithBorderRight>
                <S.TitleInfo>Language</S.TitleInfo>
                <S.Info>
                  {book.volumeInfo.language
                    ? book.volumeInfo.language.toUpperCase()
                    : 'Unavaliable'}
                </S.Info>
              </S.BoxInfoWithBorderRight>
              <S.BoxInfo>
                <S.TitleInfo>Date</S.TitleInfo>
                <S.Info>
                  {book.volumeInfo.publishedDate
                    ? formatDateEN(book.volumeInfo.publishedDate)
                    : 'Unavaliable'}
                </S.Info>
              </S.BoxInfo>
            </S.WrapperBookInfo>
          </S.HeaderContent>
          {book.volumeInfo?.description && (
            <S.ContentBook>
              <S.Descbook>{book.volumeInfo.description}</S.Descbook>
            </S.ContentBook>
          )}
        </S.ScrollContent>
        <S.ButtonReadBook onPress={openLinkReadBookWeb}>
          <S.TitleReadBook>Read Preview Book</S.TitleReadBook>
        </S.ButtonReadBook>
      </S.Content>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
