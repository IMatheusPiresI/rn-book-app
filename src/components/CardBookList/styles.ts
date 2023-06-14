import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: ${({ theme }) => theme.metrics.screenHeight * 0.24}px;
  margin-right: 16px;
`;

export const ImageBook = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const ContainerImage = styled.View`
  flex: 1;
  border-radius: 12px;
  elevation: 6;
  background-color: ${({ theme }) => theme.colors.shape};
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
`;

export const BoxAuthor = styled.View`
  width: 100%;
  height: 20px;
  margin-top: 8px;
`;

export const Author = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  flex: 1;
`;
