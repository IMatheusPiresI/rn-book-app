import React from 'react';
import { StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { getBookImageURL } from '../../resources/utils/getBookImageURL';

import * as S from './styles';
import { IProps } from './types';

export const CardBookSearch: React.FC<IProps> = ({ book, ...rest }) => (
  <S.ButtonOpacity {...rest} activeOpacity={0.7}>
    <S.Container>
      <S.BoxImage>
        <SharedElement id={`item.${book.id}.image`}>
          <S.Image
            source={{
              uri: getBookImageURL(book),
            }}
            resizeMode="cover"
            style={styles.imageBook}
          />
        </SharedElement>
      </S.BoxImage>
    </S.Container>
    <S.TitleBook numberOfLines={2}>{book.volumeInfo.title}</S.TitleBook>
  </S.ButtonOpacity>
);

export const styles = StyleSheet.create({
  imageBook: {
    borderRadius: 20,
  },
});
