import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceHeight + 20}px;
`;
