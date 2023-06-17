import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { StackAppRoutes, StackAuthentication } from './Stack/stack.routes';

export const AppRoutes = () => {
  const user = false;

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {user ? <StackAppRoutes /> : <StackAuthentication />}
    </NavigationContainer>
  );
};
