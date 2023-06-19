import React from 'react';
import { ActivityIndicator } from 'react-native';

import theme from '../../resources/styles/theme';

import * as S from './styles';
import { IProps } from './types';
export const Button: React.FC<IProps> = ({
  label,
  disabled,
  loading,
  ...rest
}) => (
  <S.ButtonOpacity activeOpacity={0.7} {...rest} disabled={disabled}>
    {loading ? (
      <ActivityIndicator size={28} color={theme.colors.shape} />
    ) : (
      <S.Label>{label}</S.Label>
    )}
  </S.ButtonOpacity>
);
