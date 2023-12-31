import React from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

import { HeaderSearchWelcome } from '../../../components/HeaderSearchWelcome';
import { KeyboardDismiss } from '../../../components/KeyboardDismiss';
import theme from '../../../resources/styles/theme';
import { ButtonAccessMore } from '../../../components/ButtonAccessMore';

import { SectionListsBooks } from './_components/SectionListsBooks';
import * as S from './styles';

const Home: React.FC = () => {
  const HEADER_HEIGHT = 325;
  const scrollY = useSharedValue(0);

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  return (
    <S.Container>
      <KeyboardDismiss>
        <>
          <HeaderSearchWelcome
            animatedScrollValue={scrollY}
            headerHeight={HEADER_HEIGHT}
          />
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={scrollHandler}
            contentContainerStyle={styles.scrollViewContent}
            style={[styles.scrollView]}
          >
            <SectionListsBooks />
          </Animated.ScrollView>
          <ButtonAccessMore />
        </>
      </KeyboardDismiss>
    </S.Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: theme.colors.shape,
    paddingBottom: theme.metrics.bottomSpaceHeight + 20,
  },

  scrollViewContent: {
    paddingTop: 325,
    paddingBottom: 80,
  },
});
