import { useFormik } from 'formik';
import React from 'react';

import { Button } from '../../../../../components/Button';
import { InputAuth } from '../../../../../components/Form/InputAuth';
import { toastError } from '../../../../../components/Toast/config';
import { verifyMessageFirebaseAuthErrors } from '../../../../../resources/utils/verifyMessageFirebaseAuthErrors';
import { registerWithEmailAndPassword } from '../../../../../services/firebase/auth';
import { IFirebaseAuthError } from '../../../../../services/firebase/auth/type';
import { createUserReferenceFirestore } from '../../../../../services/firebase/firestore/user';
import { IUserReference } from '../../../../../services/firebase/firestore/user/types';
import { useUserStore } from '../../../../../store/user';

import { registerSchema } from './schema/signIn';
import * as S from './styles';
import { IRegisterForm } from './types';

export const RegisterForm: React.FC = () => {
  const { setUser } = useUserStore();
  const formik = useFormik<IRegisterForm>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    validateOnMount: true,
    onSubmit: (values) => handleRegister(values),
  });

  const handleRegister = async (values: IRegisterForm) => {
    try {
      const user = await registerWithEmailAndPassword(
        values.email,
        values.password,
      );

      const userReference: IUserReference = {
        ...user,
        name: values.name,
      };

      await createUserReferenceFirestore(userReference);
      setUser(userReference);
    } catch (err) {
      const firebaseError = err as IFirebaseAuthError;
      const message = verifyMessageFirebaseAuthErrors(firebaseError.code);
      toastError(message);
    }
  };

  return (
    <S.Container>
      <S.TitleForm>Register</S.TitleForm>
      <S.WrapperInputs>
        <InputAuth
          icon="person"
          label="Name"
          placeholder="Jon Doe"
          onBlur={formik.handleBlur('name')}
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
          touched={formik.touched.name}
          error={formik.errors.name}
        />
        <S.BoxSpace>
          <InputAuth
            icon="person"
            label="e-mail address"
            autoCapitalize="none"
            placeholder="Ex: bookth@gmail.com"
            onBlur={formik.handleBlur('email')}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
        </S.BoxSpace>
        <S.BoxSpace>
          <InputAuth
            type="password"
            icon="lock"
            label="password"
            placeholder="Password"
            autoCapitalize="none"
            onBlur={formik.handleBlur('password')}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
        </S.BoxSpace>
        <S.BoxSpace>
          <InputAuth
            type="password"
            icon="lock"
            label="confirm password"
            autoCapitalize="none"
            placeholder="Confirm password"
            onBlur={formik.handleBlur('confirmPassword')}
            onChangeText={formik.handleChange('confirmPassword')}
            value={formik.values.confirmPassword}
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
          />
        </S.BoxSpace>
      </S.WrapperInputs>
      <S.WrapperForgotPassword>
        <S.ButtonOpacity activeOpacity={0.6}>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </S.ButtonOpacity>
      </S.WrapperForgotPassword>
      <Button
        label="Register"
        disabled={!formik.isValid}
        onPress={formik.handleSubmit}
      />
    </S.Container>
  );
};
