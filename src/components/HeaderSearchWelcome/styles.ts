import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  width: 100%;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  z-index: 99;
  position: absolute;
`;

export const ButtonOpacity = styled.TouchableOpacity``;

export const WrapperInputIcon = styled(Animated.View)`
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 16px;
`;

export const BoxIconPosition = styled.View`
  position: absolute;
  right: 16px;
`;

export const InputSearch = styled.TextInput`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  padding: 0px 16px;
  padding-right: 56px;
  height: 48px;
  width: 100%;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 200px;

  elevation: 6;
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`;

export const WrapperTextSearchBook = styled(Animated.View)`
  position: absolute;
  bottom: 40px;
`;

export const TitleHeader = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
