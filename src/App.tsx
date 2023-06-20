import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Toast, toastConfig } from './components/Toast/config';
import theme from './resources/styles/theme';
import { AppRoutes } from './routes';
import { authStageChange } from './services/firebase/auth';

export const App = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  useEffect(() => {
    authStageChange({ setInitializing });
  }, []);

  if (initializing) return null;

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};
