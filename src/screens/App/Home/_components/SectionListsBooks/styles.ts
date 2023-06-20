import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceHeight + 20}px;
`;

export const ErrorContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleError = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
