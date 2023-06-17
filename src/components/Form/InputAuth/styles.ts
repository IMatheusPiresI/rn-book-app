import styled, { css } from 'styled-components/native';

import { ITypeInput } from './types';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_light};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const WrapperInput = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  border-width: 1px;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.gray};
`;

export const BoxIcon = styled.View`
  width: 40px;
  height: 100%;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
`;

export const ButtonIcon = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput<ITypeInput>`
  flex: 1;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};

  ${({ type }) =>
    type === 'password' &&
    css`
      padding-right: 45px;
    `}
`;

export const ButtonIconRight = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;
