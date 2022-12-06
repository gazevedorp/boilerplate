import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const PrivateStacks = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerTitleAlign: 'center' }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitleAlign: 'center' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitleAlign: 'center' }}
      />
    </Tab.Navigator>
  );
}

export default PrivateStacks;