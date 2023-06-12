import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const WrapperInputIcon = styled.View`
  width: 100%;
  justify-content: center;
`;

export const BoxIconPosition = styled.View`
  position: absolute;
  right: 16px;
`;

export const InputSearch = styled.TextInput`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  padding: 0px 16px;
  padding-right: 56px;
  height: 48px;
  width: 100%;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 200px;
`;
