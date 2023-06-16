import React, { useState } from 'react';
import { Modal } from 'react-native';

import theme from '../../resources/styles/theme';
import { IconBase } from '../IconBase';

import * as S from './styles';

export const ButtonAccessMore: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  return (
    <S.Container>
      <S.ButtonOpacity activeOpacity={0.8} onPress={handleShowOptions}>
        <IconBase name="add" color={theme.colors.shape} size={32} />
      </S.ButtonOpacity>
      <Modal visible={showOptions} transparent>
        <S.TouchableCloseOptions onPress={handleCloseOptions}>
          <S.Content>
            <S.BoxPositionAnimation>
              <S.ButtonOpacityOptions>
                <S.OptionContainer>
                  <IconBase
                    color={theme.colors.shape}
                    name="casino"
                    size={24}
                  />
                  <S.TitleOption>Raffle movie</S.TitleOption>
                </S.OptionContainer>
              </S.ButtonOpacityOptions>
              <S.SpaceContainer>
                <S.ButtonOpacityOptions>
                  <S.OptionContainer>
                    <IconBase
                      color={theme.colors.shape}
                      name="casino"
                      size={24}
                    />
                    <S.TitleOption>Raffle movie</S.TitleOption>
                  </S.OptionContainer>
                </S.ButtonOpacityOptions>
              </S.SpaceContainer>
              <S.ButtonOpacityOptions>
                <S.OptionContainer>
                  <IconBase
                    color={theme.colors.shape}
                    name="favorite"
                    size={24}
                  />
                  <S.TitleOption>Favorites</S.TitleOption>
                </S.OptionContainer>
              </S.ButtonOpacityOptions>
            </S.BoxPositionAnimation>
          </S.Content>
        </S.TouchableCloseOptions>
      </Modal>
    </S.Container>
  );
};
