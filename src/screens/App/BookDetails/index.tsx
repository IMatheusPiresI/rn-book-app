import { useNavigation, useRoute } from '@react-navigation/native';
import React, { ReactNode, useLayoutEffect } from 'react';
import { Linking, StyleSheet } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';

import { IconBase } from '../../../components/IconBase';
import { MoreOptionsDots } from '../../../components/MoreOptionsDots';
import theme from '../../../resources/styles/theme';
import { formatDateEN } from '../../../resources/utils/formatDateEN';
import { getBookImageURL } from '../../../resources/utils/getBookImageURL';
import { IBook } from '../../../services/books/types';
import { useUserStore } from '../../../store/user';

import * as S from './styles';

type IProviderImage = {
  children: ReactNode;
};

const BookDetails: React.FC = () => {
  const HEADER_HEIGHT =
    theme.metrics.screenHeight * 0.3 + theme.metrics.statusBarHeight;
  const contentAnimation = useSharedValue(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { book, favoritePage } = route.params as {
    book: IBook;
    favoritePage?: boolean;
  };
  const {
    user: { favorites },
  } = useUserStore();

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
    Linking.openURL(url);
  };

  const ProviderImage = ({ children }: IProviderImage) => {
    const bookExists = favorites?.some((b) => b.id === book.id);

    if (bookExists || !favoritePage) {
      return (
        <SharedElement id={`item.${book.id}.image`}>{children}</SharedElement>
      );
    }
    return <>{children}</>;
  };

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
        <S.ButtonGoBack onPress={handleGoBack}>
          <S.WrapperGoBack>
            <IconBase
              name="arrow-back"
              size={24}
              color={theme.colors.primary}
            />
          </S.WrapperGoBack>
        </S.ButtonGoBack>
        <MoreOptionsDots book={book} />
        <S.BoxImage>
          <ProviderImage>
            <S.BookImage
              source={{
                uri: getBookImageURL(book),
              }}
              resizeMode="cover"
              style={styles.imageBook}
            />
          </ProviderImage>
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
              <S.TitleSection>Synopsis</S.TitleSection>
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

export default BookDetails;

export const styles = StyleSheet.create({
  imageBook: {
    width: theme.metrics.screenWidth * 0.32,
    height: theme.metrics.screenHeight * 0.22,
    borderRadius: 12,
  },
});
