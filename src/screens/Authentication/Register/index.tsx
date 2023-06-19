import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { ButtonSocial } from '../../../components/ButtonSocial';
import { KeyboardDismiss } from '../../../components/KeyboardDismiss';
import {
  googleConfigure,
  signInOrRegisterWithGoogleProvider,
} from '../../../services/firebase/auth';

import * as S from './styles';
import { RegisterForm } from './_components/RegisterForm';

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingGoogle, setLoadingGoogle] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleNavigateToRegister = () => {
    navigation.navigate('SignIn');
  };

  const handleSignInWithGoogle = async () => {
    setLoadingGoogle(true);
    try {
      await signInOrRegisterWithGoogleProvider();
      setLoadingGoogle(false);
    } catch (err) {
      setLoadingGoogle(false);
    }
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
        <S.ContainerScroll showsVerticalScrollIndicator={false} bounces={false}>
          <S.Header>
            <S.AppName>Bookth</S.AppName>
          </S.Header>
          <S.WrapperLoginBox>
            <RegisterForm
              loading={loading}
              setLoading={setLoading}
              loadingGoogle={loadingGoogle}
            />
            <S.WrapperSocialButton>
              <ButtonSocial
                type="Google"
                onPress={handleSignInWithGoogle}
                disabled={loadingGoogle || loading}
                loading={loadingGoogle}
              />
            </S.WrapperSocialButton>
            <S.WrapperAlignRegister>
              <S.ButtonOpacity
                activeOpacity={0.7}
                onPress={handleNavigateToRegister}
                disabled={loading || loadingGoogle}
              >
                <S.MessageRegister>
                  Have an account?{' '}
                  <S.MessageRegisterPrimary>Sign In</S.MessageRegisterPrimary>
                </S.MessageRegister>
              </S.ButtonOpacity>
            </S.WrapperAlignRegister>
          </S.WrapperLoginBox>
        </S.ContainerScroll>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  );
};

export default Register;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
