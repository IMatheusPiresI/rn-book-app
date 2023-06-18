import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.screenHeight * 0.25}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const AppName = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.shape};
`;

export const WrapperLoginBox = styled.View`
  width: 100%;
  align-items: center;
  bottom: 45px;
`;

export const WrapperSocialButton = styled.View`
  width: 90%;
  margin-top: 20px;
`;

export const MessageRegister = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_light};
  justify-content: flex-end;
  align-items: flex-end;
`;

export const MessageRegisterPrimary = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperAlignRegister = styled.View`
  width: 90%;
  margin-top: 16px;
  align-items: center;
`;

export const ButtonOpacity = styled.TouchableOpacity``;
