import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Toast, toastConfig } from './components/Toast/config';
import theme from './resources/styles/theme';
import { AppRoutes } from './routes';

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppRoutes />
    <Toast config={toastConfig} />
  </ThemeProvider>
);
