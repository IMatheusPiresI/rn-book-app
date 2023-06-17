import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.screenHeight * 0.25}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const AppName = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.shape};
`;

export const WrapperLoginBox = styled.View`
  width: 100%;
  position: absolute;
  align-items: center;
  top: ${({ theme }) => theme.metrics.screenHeight * 0.25 - 35}px;
`;
