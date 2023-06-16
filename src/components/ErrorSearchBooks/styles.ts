import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxEmpty = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TitleEmpty = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
`;
