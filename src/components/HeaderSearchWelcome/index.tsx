import React from 'react';
import LottieViewAnimation from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import ReadBookWelcomeAnimation from '../../assets/animations/read-book.json';
import { InputSearch } from '../InputSearch';

import * as S from './styles';
import { IProps } from './types';

export const HeaderSearchWelcome: React.FC<IProps> = ({
  animatedScrollValue,
  headerHeight,
}) => {
  const navigation = useNavigation();

  const handleGoToSearchScreen = () => {
    navigation.navigate('BookSearch');
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
        <S.ButtonOpacity onPress={handleGoToSearchScreen} activeOpacity={0.7}>
          <SharedElement id={`item.search.input`}>
            <InputSearch pointerEvents="none" editable={false} />
          </SharedElement>
        </S.ButtonOpacity>
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
