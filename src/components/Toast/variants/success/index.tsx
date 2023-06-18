import React from 'react';

import theme from '../../../../resources/styles/theme';
import { IconBase } from '../../../IconBase';
import { AppBaseToastProp } from '../../config';

import * as S from './styles';
export const ToastSuccess: React.FC<AppBaseToastProp> = ({
  text1,
  onPress,
}) => (
  <S.Container onPress={onPress}>
    <S.WrapperIconMessage>
      <S.BoxSpaceIcon>
        <IconBase name="check" color={theme.colors.primary} />
      </S.BoxSpaceIcon>
      <S.Text>{text1}</S.Text>
    </S.WrapperIconMessage>
  </S.Container>
);
