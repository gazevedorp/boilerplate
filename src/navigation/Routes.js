import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useUserState from '../store/userState';
import PublicStacks from './PublicStacks';
import PrivateStacks from './PrivateStacks';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { user } = useUserState();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user.token ?
          <Stack.Screen
            name="PublicStacks"
            component={PublicStacks}
            options={{ headerShown: false }}
          />
          :
          <Stack.Screen
            name="PrivateStacks"
            component={PrivateStacks}
            options={{ headerShown: false }}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;