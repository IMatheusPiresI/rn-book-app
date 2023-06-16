import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 60px;
  right: 20px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  elevation: 6;
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
`;

export const TouchableCloseOptions = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Content = styled.View`
  background-color: transparent;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxPositionAnimation = styled.View`
  position: absolute;
  bottom: 100px;
  right: 80px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ButtonOpacityOptions = styled.TouchableOpacity``;

export const OptionContainer = styled.View`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 120px;
  flex-direction: row;
  align-items: center;
`;

export const SpaceContainer = styled.View`
  margin: 20px 0;
`;

export const TitleOption = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.shape};
  margin-left: 8px;
`;
