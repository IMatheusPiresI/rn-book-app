import React from 'react';
import { StatusBar } from 'react-native';

import { HeaderSearchWelcome } from '../../components/HeaderSearchWelcome';
import { KeyboardDismiss } from '../../components/KeyboardDismiss';

import * as S from './styles';

export const Home = () => (
  <KeyboardDismiss>
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSearchWelcome />
      <S.ContentBooks />
    </S.Container>
  </KeyboardDismiss>
);
