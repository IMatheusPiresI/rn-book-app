import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { useUserStore } from '../store/user';

import { StackAppRoutes, StackAuthentication } from './Stack/stack.routes';

export const AppRoutes = () => {
  const { user } = useUserStore();

  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}
    >
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {user?.email ? <StackAppRoutes /> : <StackAuthentication />}
    </NavigationContainer>
  );
};
