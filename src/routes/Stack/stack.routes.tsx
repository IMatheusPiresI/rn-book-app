import { CardStyleInterpolators } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import BookDetails from '../../screens/App/BookDetails';
import BookSearch from '../../screens/App/BookSearch';
import Home from '../../screens/App/Home';
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
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
  </Stack.Navigator>
);
