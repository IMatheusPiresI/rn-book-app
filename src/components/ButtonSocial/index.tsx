import React, { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

import GoogleSVG from '../../assets/svg/google-logo.svg';
import theme from '../../resources/styles/theme';

import * as S from './styles';
import { IProps } from './types';

export const ButtonSocial: React.FC<IProps> = ({ type, loading, ...rest }) => {
  const getButtonIconSVG = useCallback(() => {
    switch (type) {
      case 'Google':
        return <GoogleSVG width={28} height={28} />;
      default:
        return null;
    }
  }, [type]);

  return (
    <S.Container {...rest}>
      {loading ? (
        <ActivityIndicator size={28} color={theme.colors.text_light} />
      ) : (
        <S.TitleButton>Login With {type}</S.TitleButton>
      )}
      <S.BoxIcon>{getButtonIconSVG()}</S.BoxIcon>
    </S.Container>
  );
};
