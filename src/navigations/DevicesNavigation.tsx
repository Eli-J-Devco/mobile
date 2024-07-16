/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DevicesScreen from '../screens/devices';
import {devicesRouteNames} from './router-name';
import FilterColumnsScreen from '../screens/devices/filter-colums';
import SummaryDetailScreen from '../screens/devices/summary-detail';

const Stack = createNativeStackNavigator();

const DevicesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={devicesRouteNames.Devices}
        component={DevicesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={devicesRouteNames.FilterColumns}
        component={FilterColumnsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={devicesRouteNames.SummaryDetail}
        component={SummaryDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DevicesNavigation;
