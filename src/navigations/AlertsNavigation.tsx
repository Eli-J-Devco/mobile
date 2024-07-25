/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AlertSreen from '../screens/alerts';
import AlertFilterSreen from '../screens/alerts/filter';
import {alertRouteNames} from './router-name';

const Stack = createNativeStackNavigator();

const AlertsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={alertRouteNames.Alerts}
        component={AlertSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={alertRouteNames.AlertFilter}
        component={AlertFilterSreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={alertRouteNames.AlertDetail}
        component={AlertDetailSreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AlertsNavigation;
