import styled, { css } from 'styled-components/native';

import { IDisabled } from './types';

export const ButtonOpacity = styled.TouchableOpacity<IDisabled>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.text_light};
      opacity: 0.6;
    `}
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: 700;
`;
