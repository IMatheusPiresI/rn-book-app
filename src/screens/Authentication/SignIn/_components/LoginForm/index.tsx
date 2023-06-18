import { useFormik } from 'formik';
import React from 'react';

import { Button } from '../../../../../components/Button';
import { InputAuth } from '../../../../../components/Form/InputAuth';
import { toastError } from '../../../../../components/Toast/config';
import { verifyMessageFirebaseAuthErrors } from '../../../../../resources/utils/verifyMessageFirebaseAuthErrors';
import { loginWithEmailAndPassword } from '../../../../../services/firebase/auth';
import { IFirebaseAuthError } from '../../../../../services/firebase/auth/type';
import { getUserById } from '../../../../../services/firebase/firestore/user';

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
    validateOnMount: true,
    onSubmit: (values) => handleSignIn(values),
  });

  const handleSignIn = async (values: ISignInForm) => {
    try {
      const result = await loginWithEmailAndPassword(
        values.email,
        values.password,
      );
      const user = await getUserById(result.id);
      console.log('user', user);
    } catch (err) {
      const firebaseError = err as IFirebaseAuthError;
      const message = verifyMessageFirebaseAuthErrors(firebaseError.code);
      toastError(message);
    }
  };

  return (
    <S.Container>
      <S.TitleForm>Sign In</S.TitleForm>
      <S.WrapperInputs>
        <InputAuth
          icon="person"
          label="e-mail address"
          autoCapitalize="none"
          placeholder="Ex: bookth@gmail.com"
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          onBlur={formik.handleBlur('email')}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <S.BoxSpace>
          <InputAuth
            type="password"
            icon="lock"
            autoCapitalize="none"
            label="password"
            placeholder="Password"
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            onBlur={formik.handleBlur('password')}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
        </S.BoxSpace>
      </S.WrapperInputs>
      <S.WrapperForgotPassword>
        <S.ButtonOpacity activeOpacity={0.6}>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </S.ButtonOpacity>
      </S.WrapperForgotPassword>
      <Button
        label="Sign In"
        disabled={!formik.isValid}
        onPress={formik.handleSubmit}
      />
    </S.Container>
  );
};
