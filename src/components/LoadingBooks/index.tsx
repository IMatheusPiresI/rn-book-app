import React from 'react';
import LottieViewAnimation from 'lottie-react-native';
import { StyleSheet } from 'react-native';

import LoadingBookAnimation from '../../assets/animations/loading-book.json';

import * as S from './styles';

export const LoadingBooks: React.FC = () => (
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

const styles = StyleSheet.create({
  animationLoading: {
    width: 250,
    height: 250,
  },
});
