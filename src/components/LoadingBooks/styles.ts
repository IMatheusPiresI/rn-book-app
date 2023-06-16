import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingMessage = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BoxPositionMessageLoading = styled.View`
  position: absolute;
  top: 180px;
`;

export const BoxAnimation = styled.View`
  align-items: center;
  justify-content: center;
`;
