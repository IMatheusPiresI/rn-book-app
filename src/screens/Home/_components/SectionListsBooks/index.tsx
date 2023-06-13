import React from 'react';
import LottieViewAnimation from 'lottie-react-native';
import { StyleSheet } from 'react-native';

import { ListBooks } from '../../../../components/ListBooks';
import LoadingBookAnimation from '../../../../assets/animations/loading-book.json';

import * as S from './styles';
import { useBooksSection } from './hooks/useBooksSection';

export const SectionListsBooks: React.FC = () => {
  const { loading, booksSections } = useBooksSection();

  const renderContent = () => {
    if (loading) {
      return (
        <S.LoadingContainer>
          <LottieViewAnimation
            source={LoadingBookAnimation}
            autoPlay
            loop
            style={styles.animationLoading}
          />
          <S.BoxPositionMessageLoading>
            <S.LoadingMessage>Loading Books...</S.LoadingMessage>
          </S.BoxPositionMessageLoading>
        </S.LoadingContainer>
      );
    }

    return (
      <S.Container>
        <ListBooks title="Fiction" books={booksSections.fiction} />
        <ListBooks title="Biography" books={booksSections.biography} />
        <ListBooks title="Novel" books={booksSections.novel} />
        <ListBooks title="Biography" books={booksSections.biography} />
      </S.Container>
    );
  };

  return renderContent();
};

const styles = StyleSheet.create({
  animationLoading: {
    width: 250,
    height: 250,
  },
});
