import React from 'react';

import theme from '../../resources/styles/theme';
import { IconBase } from '../IconBase';

import * as S from './styles';

export const ErrorSearchBooks: React.FC = () => (
  <S.Container>
    <S.BoxEmpty>
      <IconBase name="menu-book" color={theme.colors.primary} size={72} />
      <S.TitleEmpty>Error search books, try again!</S.TitleEmpty>
    </S.BoxEmpty>
  </S.Container>
);
