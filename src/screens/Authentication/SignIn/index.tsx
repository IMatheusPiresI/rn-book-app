import React from 'react';

import { KeyboardDismiss } from '../../../components/KeyboardDismiss';

import * as S from './styles';
import { LoginForm } from './_components/LoginForm';

const SignIn: React.FC = () => (
  <KeyboardDismiss>
    <S.Container>
      <S.Header>
        <S.AppName>Bookth</S.AppName>
      </S.Header>
      <S.WrapperLoginBox>
        <LoginForm />
      </S.WrapperLoginBox>
    </S.Container>
  </KeyboardDismiss>
);

export default SignIn;
