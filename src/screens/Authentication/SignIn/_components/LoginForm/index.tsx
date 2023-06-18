import { useFormik } from 'formik';
import React from 'react';

import { Button } from '../../../../../components/Button';
import { InputAuth } from '../../../../../components/Form/InputAuth';

import { signInSchema } from './schema/signIn';
import * as S from './styles';
import { ISignInForm } from './types';

export const LoginForm: React.FC = () => {
  const formik = useFormik<ISignInForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => handleSignIn(values),
  });

  const handleSignIn = (values: ISignInForm) => {
    console.log(values);
  };

  return (
    <S.Container>
      <S.TitleForm>Sign In</S.TitleForm>
      <S.WrapperInputs>
        <InputAuth
          icon="person"
          label="e-mail address"
          placeholder="Ex: bookth@gmail.com"
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
        />
        <S.BoxSpace>
          <InputAuth
            type="password"
            icon="lock"
            label="password"
            placeholder="Password"
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
          />
        </S.BoxSpace>
      </S.WrapperInputs>
      <S.WrapperForgotPassword>
        <S.ButtonOpacity activeOpacity={0.6}>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </S.ButtonOpacity>
      </S.WrapperForgotPassword>
      <Button label="Sign In" disabled={!formik.isValid} />
    </S.Container>
  );
};
