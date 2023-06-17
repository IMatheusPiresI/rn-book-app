import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: 700;
`;
