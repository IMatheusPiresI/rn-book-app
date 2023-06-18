import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';

import theme from '../../../resources/styles/theme';
import { IconBase } from '../../IconBase';

import * as S from './styles';
import { IProps } from './types';

export const InputAuth: React.FC<IProps> = ({
  icon,
  label,
  type,
  touched,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(
    type === 'password',
  );
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleToogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.WrapperInput>
        <S.BoxIcon>
          <S.ButtonIcon activeOpacity={0.8} onPress={handleFocus}>
            <IconBase name={icon} color={theme.colors.gray} />
          </S.ButtonIcon>
        </S.BoxIcon>
        <S.Input
          autoCorrect={false}
          secureTextEntry={showPassword}
          {...rest}
          ref={inputRef}
          type={type}
        />
        {type === 'password' && (
          <S.ButtonIconRight onPress={handleToogleShowPassword}>
            {showPassword ? (
              <IconBase name="visibility" color={theme.colors.gray} />
            ) : (
              <IconBase name="visibility-off" color={theme.colors.gray} />
            )}
          </S.ButtonIconRight>
        )}
      </S.WrapperInput>
      {touched && error && (
        <S.ErrorBox>
          <S.ErrorMessage>{error}</S.ErrorMessage>
        </S.ErrorBox>
      )}
    </S.Container>
  );
};
