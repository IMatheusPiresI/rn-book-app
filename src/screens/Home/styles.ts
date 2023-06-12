import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.metrics.statusBarHeight}px;
`;

export const ContentBooks = styled.ScrollView`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceHeight + 20}px;
`;
