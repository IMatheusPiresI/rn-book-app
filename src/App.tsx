import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from './resources/styles/theme';
import { AppRoutes } from './routes';

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppRoutes />
  </ThemeProvider>
);
