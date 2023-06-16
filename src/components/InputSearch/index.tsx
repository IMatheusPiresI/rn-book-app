import React, { useCallback, useEffect, useRef } from 'react';
import { TextInput } from 'react-native';

import theme from '../../resources/styles/theme';
import { IconBase } from '../IconBase';

import * as S from './styles';
import { IProps } from './types';

export const InputSearch: React.FC<IProps> = ({ focusOnMount, ...rest }) => {
  const searchRef = useRef<TextInput>(null);

  const handleFocus = () => {
    searchRef.current?.focus();
  };

  const onFocusOnMount = useCallback(() => {
    if (!focusOnMount) return;

    searchRef.current?.focus();
  }, [focusOnMount]);

  useEffect(() => {
    onFocusOnMount();
  }, [onFocusOnMount]);

  return (
    <S.Container>
      <S.InputSearch
        placeholderTextColor={theme.colors.gray}
        placeholder="Search for the desired book"
        ref={searchRef}
        {...rest}
      />
      <S.BoxIconPosition>
        <S.ButtonOpacity onPress={handleFocus} activeOpacity={0.7}>
          <IconBase name="menu-book" color={theme.colors.primary} size={32} />
        </S.ButtonOpacity>
      </S.BoxIconPosition>
    </S.Container>
  );
};
