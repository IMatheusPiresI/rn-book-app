import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  margin-right: 16px;
`;

export const ImageBook = styled.Image``;

export const ContainerImage = styled.View`
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.shape};
  elevation: 6;
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: 8px;
`;
