import React from 'react';
import LottieViewAnimation from 'lottie-react-native';
import { StyleSheet } from 'react-native';

import ReadBookWelcomeAnimation from '../../assets/animations/read-book.json';
import theme from '../../styles/theme';
import { IconBase } from '../IconBase';

import * as S from './styles';

export const HeaderSearchWelcome: React.FC = () => (
  <S.Container>
    <LottieViewAnimation
      source={ReadBookWelcomeAnimation}
      autoPlay
      loop
      style={styles.animateDimensions}
    />
    <S.WrapperInputIcon>
      <S.InputSearch
        placeholderTextColor={theme.colors.gray}
        placeholder="Search for the desired book"
      />
      <S.BoxIconPosition>
        <IconBase name="menu-book" color={theme.colors.primary} size={32} />
      </S.BoxIconPosition>
    </S.WrapperInputIcon>
  </S.Container>
);

const styles = StyleSheet.create({
  animateDimensions: {
    width: 200,
    height: 200,
  },
});
