import React from 'react';
import { StatusBar } from 'react-native';

import { HeaderSearchWelcome } from '../../components/HeaderSearchWelcome';
import { KeyboardDismiss } from '../../components/KeyboardDismiss';

import { SectionListsBooks } from './_components/SectionListsBooks';
import * as S from './styles';

export const Home = () => (
  <S.Container>
    <KeyboardDismiss>
      <>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <HeaderSearchWelcome />
        <S.ContentBooks>
          <SectionListsBooks />
        </S.ContentBooks>
      </>
    </KeyboardDismiss>
  </S.Container>
);
