import { CardStyleInterpolators } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { BookDetails } from '../../screens/BookDetails';
import { BookSearch } from '../../screens/BookSearch';
import { Home } from '../../screens/Home';

const Stack = createSharedElementStackNavigator();

const cardInterpolationAnimation = Platform.select({
  android: {
    animation: CardStyleInterpolators.forFadeFromBottomAndroid,
  },
  ios: {
    animation: CardStyleInterpolators.forFadeFromCenter,
  },
});
export const StackRoutes = () => (
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
