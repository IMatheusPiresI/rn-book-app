import React, { useRef, useState } from 'react';
import LottieViewAnimation from 'lottie-react-native';
import { StyleSheet, TextInput } from 'react-native';

import ReadBookWelcomeAnimation from '../../assets/animations/read-book.json';
import theme from '../../styles/theme';
import { IconBase } from '../IconBase';

import * as S from './styles';

export const HeaderSearchWelcome: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const searchRef = useRef<TextInput>(null);

  const handleFocus = () => {
    searchRef.current?.focus();
  };

  return (
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
          value={search}
          onChangeText={setSearch}
          ref={searchRef}
        />
        <S.BoxIconPosition>
          <S.ButtonOpacity onPress={handleFocus} activeOpacity={0.7}>
            <IconBase name="menu-book" color={theme.colors.primary} size={32} />
          </S.ButtonOpacity>
        </S.BoxIconPosition>
      </S.WrapperInputIcon>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  animateDimensions: {
    width: 200,
    height: 200,
  },
});
