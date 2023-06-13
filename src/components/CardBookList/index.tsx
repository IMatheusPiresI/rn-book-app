import React, { useCallback } from 'react';

import { IProps } from './types';
import * as S from './styles';

export const CardBookList: React.FC<IProps> = ({ book }) => {
  const getImageUrl = useCallback(() => {
    let image: string | undefined;
    if (book.volumeInfo.imageLinks?.thumbnail) {
      image = book.volumeInfo.imageLinks.thumbnail;
    }

    if (!image && book.volumeInfo.imageLinks?.smallThumbnail) {
      image = book.volumeInfo.imageLinks.smallThumbnail;
    }
    return image?.replace('http', 'https');
  }, [
    book.volumeInfo.imageLinks?.smallThumbnail,
    book.volumeInfo.imageLinks?.thumbnail,
  ]);

  return (
    <S.Container>
      <S.ImageBook
        source={{
          uri: getImageUrl(),
        }}
        resizeMode="cover"
      />
    </S.Container>
  );
};
