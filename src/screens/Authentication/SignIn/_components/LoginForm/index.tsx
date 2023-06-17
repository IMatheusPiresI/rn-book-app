import React from 'react';

import { Button } from '../../../../../components/Button';
import { InputAuth } from '../../../../../components/Form/InputAuth';

import * as S from './styles';

export const LoginForm: React.FC = () => (
  <S.Container>
    <S.TitleForm>Sign In</S.TitleForm>
    <S.WrapperInputs>
      <InputAuth
        icon="person"
        label="e-mail address"
        placeholder="Ex: bookth@gmail.com"
      />
      <S.BoxSpace>
        <InputAuth
          type="password"
          icon="lock"
          label="password"
          placeholder="Password"
        />
      </S.BoxSpace>
    </S.WrapperInputs>
    <Button label="Sign In" />
  </S.Container>
);
