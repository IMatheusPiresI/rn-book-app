import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ theme }) => theme.metrics.screenWidth * 0.3}px;
  height: ${({ theme }) => theme.metrics.screenHeight * 0.2}px;
  margin-right: 16px;
`;

export const ImageBook = styled.Image`
  width: 100%;
  height: 100%;
`;
