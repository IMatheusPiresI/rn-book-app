import React from 'react';

import * as S from './styles';
import { IProps } from './types';
export const Button: React.FC<IProps> = ({ label, disabled, ...rest }) => (
  <S.ButtonOpacity activeOpacity={0.7} {...rest} disabled={disabled}>
    <S.Label>{label}</S.Label>
  </S.ButtonOpacity>
);
