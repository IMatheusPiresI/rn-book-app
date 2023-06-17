import React, { useState } from 'react';
import { Modal, Platform, Share } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { IconBase } from '../IconBase';
import theme from '../../resources/styles/theme';
import { getBookImageURL } from '../../resources/utils/getBookImageURL';

import { IProps } from './types';
import * as S from './styles';
import { useFavorites } from './hooks/useFavorites';

export const MoreOptionsDots: React.FC<IProps> = ({ book }) => {
  const animateOptions = useSharedValue(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const animatePosition = Platform.OS === 'ios' ? 80 : 55;

  const handleOpenOptions = () => {
    setShowOptions(true);
    setDisabled(true);
    animateOptions.value = withTiming(1, { duration: 300 });
    setTimeout(() => {
      setDisabled(false);
    }, 300);
  };

  const handleCloseOptions = () => {
    animateOptions.value = withTiming(0, { duration: 300 });
    setDisabled(true);
    setTimeout(() => {
      setShowOptions(false);
      setDisabled(false);
    }, 300);
  };

  const { bookExists, handleToogleAddOrRemoveBookStorage } = useFavorites({
    book,
    handleCloseOptions,
  });

  const shareBook = async () => {
    await Share.share({
      url: getBookImageURL(book),
      message: `Acesse o preview do livro pelo link ${book.volumeInfo.previewLink}`,
    });
  };

  const rAnimateBoxOptions = useAnimatedStyle(() => ({
    top: interpolate(animateOptions.value, [0, 1], [20, animatePosition]),
    right: interpolate(animateOptions.value, [0, 1], [0, 50]),
    transform: [{ scale: interpolate(animateOptions.value, [0, 1], [0, 1]) }],
    opacity: animateOptions.value,
  }));

  return (
    <S.Container>
      <S.ButtonOpacity onPress={handleOpenOptions}>
        <IconBase name="more-vert" color={theme.colors.primary} size={32} />
      </S.ButtonOpacity>
      <Modal visible={showOptions} transparent>
        <S.TouchableCloseOptions
          onPress={handleCloseOptions}
          disabled={disabled}
        >
          <S.Content>
            <S.ContainerOptions style={rAnimateBoxOptions}>
              <S.BoxOption>
                <S.ButtonOption onPress={handleToogleAddOrRemoveBookStorage}>
                  <IconBase name="favorite" color={theme.colors.primary} />
                  <S.TitleOption>
                    {bookExists ? 'Remove To Favorites' : 'Add To Favorites'}
                  </S.TitleOption>
                </S.ButtonOption>
              </S.BoxOption>
              <S.BoxOptionWithBorder>
                <S.BoxOption>
                  <S.ButtonOption onPress={shareBook}>
                    <IconBase name="share" color={theme.colors.primary} />
                    <S.TitleOption>Compartilhar</S.TitleOption>
                  </S.ButtonOption>
                </S.BoxOption>
              </S.BoxOptionWithBorder>
            </S.ContainerOptions>
          </S.Content>
        </S.TouchableCloseOptions>
      </Modal>
    </S.Container>
  );
};
