import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const WrapperInput = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  border-width: 1px;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
