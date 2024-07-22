/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/login';
import DrawerNavigation from './DrawerNavigation';
import {rootRouteName} from './router-name';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={rootRouteName.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Root;
