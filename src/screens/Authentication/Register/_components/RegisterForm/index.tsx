import { useFormik } from 'formik';
import React from 'react';

import { Button } from '../../../../../components/Button';
import { InputAuth } from '../../../../../components/Form/InputAuth';

import * as S from './styles';
import { IRegisterForm } from './types';

export const RegisterForm: React.FC = () => {
  const formik = useFormik<IRegisterForm>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => handleRegister(values),
  });

  const handleRegister = (values: IRegisterForm) => {
    console.log(values);
  };

  console.log(formik.values);

  return (
    <S.Container>
      <S.TitleForm>Register</S.TitleForm>
      <S.WrapperInputs>
        <InputAuth
          icon="person"
          label="Name"
          placeholder="Jon Doe"
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
        />
        <S.BoxSpace>
          <InputAuth
            icon="person"
            label="e-mail address"
            placeholder="Ex: bookth@gmail.com"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
        </S.BoxSpace>
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
        <S.BoxSpace>
          <InputAuth
            type="password"
            icon="lock"
            label="confirm password"
            placeholder="Confirm password"
            onChangeText={formik.handleChange('confirmPassword')}
            value={formik.values.confirmPassword}
          />
        </S.BoxSpace>
      </S.WrapperInputs>
      <S.WrapperForgotPassword>
        <S.ButtonOpacity activeOpacity={0.6}>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </S.ButtonOpacity>
      </S.WrapperForgotPassword>
      <Button label="Register" disabled />
    </S.Container>
  );
};
