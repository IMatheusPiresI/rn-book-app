import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const Content = styled(Animated.View)`
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  align-self: baseline;
  border-radius: 100px;
  width: 100px;
  padding: 6px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Animated.Text)`
  font-weight: 500;
  font-size: 14px;
`;
