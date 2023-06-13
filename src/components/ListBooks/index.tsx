import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { IBook } from '../../services/books/types';
import { CardBookList } from '../CardBookList';

import * as S from './styles';
import { IProps } from './types';
export const ListBooks: React.FC<IProps> = ({ title, books }) => {
  const renderitem = ({ item }: ListRenderItemInfo<IBook>) => {
    if (
      !item.volumeInfo.imageLinks?.smallThumbnail &&
      !item.volumeInfo.imageLinks?.thumbnail
    )
      return null;

    return <CardBookList book={item} />;
  };
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <Animated.FlatList
        data={books}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.listContent}
        renderItem={renderitem}
      />
    </S.Container>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingLeft: 16,
    paddingVertical: 20,
  },
});
