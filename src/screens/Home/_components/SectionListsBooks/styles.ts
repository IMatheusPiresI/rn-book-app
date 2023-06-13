import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceHeight + 20}px;
`;

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
