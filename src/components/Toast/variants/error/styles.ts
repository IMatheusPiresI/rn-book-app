import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  padding: 12px 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-width: 1px;
  border-left-width: 8px;
  border-color: ${({ theme }) => theme.colors.error};
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.error};
`;

export const WrapperIconMessage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxSpaceIcon = styled.View`
  margin-right: 8px;
`;
