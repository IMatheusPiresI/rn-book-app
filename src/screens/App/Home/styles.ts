import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.metrics.statusBarHeight}px;
`;

export const AnimatedScrollView = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    paddingTop: 285,
  },
})`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceHeight + 20}px;
` as unknown as typeof ScrollView;
