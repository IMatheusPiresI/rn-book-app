import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { ButtonSocial } from '../../../components/ButtonSocial';
import { KeyboardDismiss } from '../../../components/KeyboardDismiss';
import {
  googleConfigure,
  signInOrRegisterWithGoogleProvider,
} from '../../../services/firebase/auth';

import * as S from './styles';
import { LoginForm } from './_components/LoginForm';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    googleConfigure();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <KeyboardDismiss>
        <S.Container>
          <S.Header>
            <S.AppName>Bookth</S.AppName>
          </S.Header>
          <S.WrapperLoginBox>
            <LoginForm />
            <S.WrapperSocialButton>
              <ButtonSocial
                type="Google"
                onPress={signInOrRegisterWithGoogleProvider}
              />
            </S.WrapperSocialButton>
            <S.WrapperAlignRegister>
              <S.ButtonOpacity
                activeOpacity={0.7}
                onPress={handleNavigateToRegister}
              >
                <S.MessageRegister>
                  Don&apos;t have an account?{' '}
                  <S.MessageRegisterPrimary>Register</S.MessageRegisterPrimary>
                </S.MessageRegister>
              </S.ButtonOpacity>
            </S.WrapperAlignRegister>
          </S.WrapperLoginBox>
        </S.Container>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
