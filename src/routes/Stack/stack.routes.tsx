import { CardStyleInterpolators } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import BookDetails from '../../screens/App/BookDetails';
import BookSearch from '../../screens/App/BookSearch';
import Favorites from '../../screens/App/Favorites';
import Home from '../../screens/App/Home';
import Shuffle from '../../screens/App/Shuffle';
import Register from '../../screens/Authentication/Register';
import SignIn from '../../screens/Authentication/SignIn';

const Stack = createSharedElementStackNavigator();

const cardInterpolationAnimation = Platform.select({
  android: {
    animation: CardStyleInterpolators.forFadeFromBottomAndroid,
  },
  ios: {
    animation: CardStyleInterpolators.forFadeFromCenter,
  },
});

export const StackAuthentication = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SignIn"
  >
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        cardStyleInterpolator: cardInterpolationAnimation?.animation,
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{
        cardStyleInterpolator: cardInterpolationAnimation?.animation,
      }}
    />
  </Stack.Navigator>
);

export const StackAppRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    />
    <Stack.Screen
      name="BookDetails"
      component={BookDetails}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
      sharedElements={(route) => {
        const { book } = route.params;
        return [`item.${book.id}.image`];
      }}
    />
    <Stack.Screen
      name="BookSearch"
      component={BookSearch}
      options={{
        cardStyleInterpolator: cardInterpolationAnimation?.animation,
        gestureEnabled: false,
      }}
      sharedElements={(_, otherRoute, showing) => {
        if (otherRoute.name === 'Home' && showing) {
          return [`item.search.input`];
        }
      }}
    />
    <Stack.Screen
      name="Favorites"
      component={Favorites}
      options={{
        cardStyleInterpolator: cardInterpolationAnimation?.animation,
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name="Shuffle"
      component={Shuffle}
      options={{
        cardStyleInterpolator: cardInterpolationAnimation?.animation,
        gestureEnabled: false,
      }}
    />
  </Stack.Navigator>
);
