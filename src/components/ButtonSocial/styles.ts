import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50px;
`;

export const TitleButton = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
`;

export const BoxIcon = styled.View`
  position: absolute;
  left: 16px;
`;
