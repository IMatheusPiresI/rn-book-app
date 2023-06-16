import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';

import { getBookImageURL } from '../../resources/utils/getBookImageURL';

import * as S from './styles';
import { IProps } from './types';

export const CardBookSearch: React.FC<IProps> = ({ book, ...rest }) => (
  <S.ButtonOpacity {...rest}>
    <S.Container>
      <SharedElement id={`item.${book.id}.image`}>
        <S.BoxImage>
          <S.Image
            source={{
              uri: getBookImageURL(book),
            }}
            resizeMode="cover"
          />
        </S.BoxImage>
      </SharedElement>
    </S.Container>
    <S.TitleBook numberOfLines={2}>{book.volumeInfo.title}</S.TitleBook>
  </S.ButtonOpacity>
);
