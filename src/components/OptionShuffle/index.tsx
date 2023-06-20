import React, { useCallback, useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import theme from '../../resources/styles/theme';

import * as S from './styles';
import { IProps } from './types';

export const OptionShuffle: React.FC<IProps> = ({
  title,
  isSelected,
  ...rest
}) => {
  const animateSelect = useSharedValue(0);

  const rAnimateSelect = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animateSelect.value,
      [0, 1],
      [theme.colors.shape, theme.colors.primary],
    );
    return {
      backgroundColor,
    };
  });

  const rAnimateTitleSelect = useAnimatedStyle(() => {
    const color = interpolateColor(
      animateSelect.value,
      [0, 1],
      [theme.colors.primary, theme.colors.shape],
    );

    return {
      color,
    };
  });

  const animateOnSelect = useCallback(() => {
    if (isSelected) {
      animateSelect.value = withTiming(1, { duration: 400 });
      return;
    }
    animateSelect.value = withTiming(0, { duration: 400 });
  }, [animateSelect, isSelected]);

  useEffect(() => {
    animateOnSelect();
  }, [animateOnSelect]);

  return (
    <S.Container {...rest}>
      <S.Content style={rAnimateSelect}>
        <S.Title style={rAnimateTitleSelect}>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
};
