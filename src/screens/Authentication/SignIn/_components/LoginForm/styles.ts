import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 16px;
  padding: 20px;
  elevation: 6;
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`;

export const TitleForm = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperInputs = styled.View`
  width: 100%;
  margin-top: 12px;
`;

export const BoxSpace = styled.View`
  margin: 12px 0;
`;
