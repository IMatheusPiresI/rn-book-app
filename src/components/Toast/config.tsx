import React from 'react';
import Toast, { BaseToastProps, ToastProps } from 'react-native-toast-message';

import theme from '../../resources/styles/theme';

import { ToastError } from './variants/error';
import { ToastSuccess } from './variants/success';

export type AppBaseToastProp = BaseToastProps;

const toastConfig = {
  success: (props: AppBaseToastProp) => <ToastSuccess {...props} />,
  error: (props: AppBaseToastProp) => <ToastError {...props} />,
};

export { toastConfig, Toast };

const toasBaseOptions: ToastProps = {
  position: 'bottom',
  bottomOffset: theme.metrics.bottomSpaceHeight + 88,
  onPress: () => Toast.hide(),
};

export const toastSuccess = (msg: string) => {
  Toast.show({
    type: 'success',
    text1: msg,
    ...toasBaseOptions,
  });
};

export const toastError = (msg: string) => {
  Toast.show({
    type: 'error',
    text1: msg,
    ...toasBaseOptions,
  });
};
