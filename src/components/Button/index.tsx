import React from 'react';

import * as S from './styles';
import { IProps } from './types';
export const Button: React.FC<IProps> = ({ label, ...rest }) => (
  <S.ButtonOpacity activeOpacity={0.7} {...rest}>
    <S.Container>
      <S.Label>{label}</S.Label>
    </S.Container>
  </S.ButtonOpacity>
);
