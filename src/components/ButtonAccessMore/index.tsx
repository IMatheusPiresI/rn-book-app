import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import theme from '../../resources/styles/theme';
import { useUserStore } from '../../store/user';
import { IconBase } from '../IconBase';

import * as S from './styles';

export const ButtonAccessMore: React.FC = () => {
  const { logout } = useUserStore();
  const navigation = useNavigation();
  const animateOptions = useSharedValue(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleNavigateToFavorites = () => {
    navigation.navigate('Favorites');
    handleCloseOptions();
  };

  const handleNavigateToShuffle = () => {
    navigation.navigate('Shuffle');
    handleCloseOptions();
  };

  const handleLogout = () => {
    handleCloseOptions();
    logout();
  };
  const handleShowOptions = () => {
    setShowOptions(true);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 400);
    animateOptions.value = withTiming(1, { duration: 400 });
  };

  const handleCloseOptions = () => {
    animateOptions.value = withTiming(0, { duration: 400 });
    setDisabled(true);
    setTimeout(() => {
      setShowOptions(false);
      setDisabled(false);
    }, 400);
  };

  const rAnimatedOptionsPosition = useAnimatedStyle(() => ({
    right: interpolate(animateOptions.value, [0, 1], [20, 70]),
    bottom: interpolate(animateOptions.value, [0, 1], [40, 110]),
    transform: [
      { rotateZ: `${interpolate(animateOptions.value, [0, 1], [-45, 0])}deg` },
      { scale: interpolate(animateOptions.value, [0, 1], [0.3, 1]) },
    ],
    opacity: animateOptions.value,
  }));

  return (
    <S.Container>
      <S.ButtonOpacity
        activeOpacity={0.8}
        onPress={handleShowOptions}
        disabled={disabled}
      >
        <IconBase name="add" color={theme.colors.shape} size={32} />
      </S.ButtonOpacity>
      <Modal visible={showOptions} transparent>
        <S.TouchableCloseOptions
          onPress={handleCloseOptions}
          disabled={disabled}
        >
          <S.Content>
            <S.BoxPositionAnimation style={rAnimatedOptionsPosition}>
              <S.ButtonOpacityOptions onPress={handleNavigateToShuffle}>
                <S.OptionContainer>
                  <IconBase
                    color={theme.colors.shape}
                    name="casino"
                    size={24}
                  />
                  <S.TitleOption>Shuffle Book</S.TitleOption>
                </S.OptionContainer>
              </S.ButtonOpacityOptions>
              <S.SpaceContainer>
                <S.ButtonOpacityOptions onPress={handleNavigateToFavorites}>
                  <S.OptionContainer>
                    <IconBase
                      color={theme.colors.shape}
                      name="favorite"
                      size={24}
                    />
                    <S.TitleOption>Favorites</S.TitleOption>
                  </S.OptionContainer>
                </S.ButtonOpacityOptions>
              </S.SpaceContainer>

              <S.ButtonOpacityOptions onPress={handleLogout}>
                <S.OptionLogout>
                  <IconBase
                    color={theme.colors.shape}
                    name="logout"
                    size={24}
                  />
                  <S.TitleOption>Log Out</S.TitleOption>
                </S.OptionLogout>
              </S.ButtonOpacityOptions>
            </S.BoxPositionAnimation>
          </S.Content>
        </S.TouchableCloseOptions>
      </Modal>
    </S.Container>
  );
};
