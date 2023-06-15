import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { BookDetails } from '../../screens/BookDetails';
import { Home } from '../../screens/Home';

const Stack = createSharedElementStackNavigator();

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
  </Stack.Navigator>
);
