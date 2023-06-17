import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 50px;
  right: 20px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ContainerOptions = styled(Animated.View)`
  width: 200px;
  position: absolute;
  top: 80px;
  right: 50px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const BoxOption = styled.View`
  width: 100%;
`;
export const BoxOptionWithBorder = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonOption = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  flex-direction: row;
  align-items: center;
`;

export const TitleOption = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 8px;
`;

export const TouchableCloseOptions = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;
