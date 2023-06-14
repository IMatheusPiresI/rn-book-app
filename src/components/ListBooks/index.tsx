import React from 'react';
import {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

import { IBook } from '../../services/books/types';
import { CardBookList } from '../CardBookList';

import * as S from './styles';
import { IProps } from './types';
export const ListBooks: React.FC<IProps> = ({ title, books }) => {
  const scrollX = useSharedValue(0);

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  const renderitem = ({ item, index }: ListRenderItemInfo<IBook>) => (
    <CardBookList book={item} index={index} scrollX={scrollX} />
  );

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <Animated.FlatList
        data={books}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.listContent}
        renderItem={renderitem}
        maxToRenderPerBatch={7}
        initialNumToRender={7}
        windowSize={4}
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
