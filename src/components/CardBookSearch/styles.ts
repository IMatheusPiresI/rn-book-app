import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const ButtonOpacity = styled.TouchableOpacity`
  width: 100%;
  max-width: ${({ theme }) => theme.metrics.screenWidth * 0.4}px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Container = styled(Animated.View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.screenHeight * 0.25}px;
`;

export const BoxImage = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.shape};
  elevation: 6;
  background-color: ${({ theme }) => theme.colors.shape};
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const TitleBook = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
  text-align: center;
`;
