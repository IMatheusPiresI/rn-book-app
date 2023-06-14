import React, { useRef, useState } from 'react';
import LottieViewAnimation from 'lottie-react-native';
import { StyleSheet, TextInput } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import ReadBookWelcomeAnimation from '../../assets/animations/read-book.json';
import theme from '../../resources/styles/theme';
import { IconBase } from '../IconBase';

import * as S from './styles';
import { IProps } from './types';

export const HeaderSearchWelcome: React.FC<IProps> = ({
  animatedScrollValue,
  headerHeight,
}) => {
  const [search, setSearch] = useState<string>('');
  const searchRef = useRef<TextInput>(null);

  const handleFocus = () => {
    searchRef.current?.focus();
  };

  const rAnimatedHeight = useAnimatedStyle(() => ({
    height: interpolate(
      animatedScrollValue.value,
      [0, headerHeight - 100],
      [headerHeight, 120],
      Extrapolate.CLAMP,
    ),
  }));

  const rAnimatedLogo = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedScrollValue.value,
          [0, headerHeight / 2],
          [0, -80],
          Extrapolate.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      animatedScrollValue.value,
      [0, headerHeight / 2],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const rAnimatedPosition = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedScrollValue.value,
          [0, headerHeight - 120],
          [0, 34],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const rAnimatedTitleHeader = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedScrollValue.value,
      [0, headerHeight / 2, headerHeight - 100],
      [0, 0, 1],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          animatedScrollValue.value,
          [0, headerHeight / 2, headerHeight - 120],
          [10, 10, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  return (
    <S.Container style={rAnimatedHeight}>
      <Animated.View style={rAnimatedLogo}>
        <LottieViewAnimation
          source={ReadBookWelcomeAnimation}
          autoPlay
          loop
          style={styles.animateDimensions}
        />
      </Animated.View>
      <S.WrapperTextSearchBook style={rAnimatedTitleHeader}>
        <S.TitleHeader>Search Your Book</S.TitleHeader>
      </S.WrapperTextSearchBook>
      <S.WrapperInputIcon style={rAnimatedPosition}>
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
