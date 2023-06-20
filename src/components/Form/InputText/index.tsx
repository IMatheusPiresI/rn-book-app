import React from 'react';

import theme from '../../../resources/styles/theme';

import * as S from './styles';
import { IProps } from './types';

export const InputText: React.FC<IProps> = ({ label, ...rest }) => (
  <S.Container>
    <S.Label>{label}</S.Label>
    <S.WrapperInput>
      <S.Input
        autoCorrect={false}
        {...rest}
        placeholderTextColor={theme.colors.gray}
      />
    </S.WrapperInput>
  </S.Container>
);
