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

export const WrapperInputIcon = styled(Animated.View)`
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  z-index: 99;
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

export const BoxShadowInput = styled.View`
  width: 100%;
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.shape};
  elevation: 6;
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`;
