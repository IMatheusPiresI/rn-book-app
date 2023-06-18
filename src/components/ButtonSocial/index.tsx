import React, { useCallback } from 'react';

import GoogleSVG from '../../assets/svg/google-logo.svg';

import * as S from './styles';
import { IProps } from './types';

export const ButtonSocial: React.FC<IProps> = ({ type, ...rest }) => {
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
      <S.TitleButton>Login With {type}</S.TitleButton>
      <S.BoxIcon>{getButtonIconSVG()}</S.BoxIcon>
    </S.Container>
  );
};
