/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {TransitionSpecs, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NotifySreen from '../screens/notify';
import BottomNavigation from './BottomNavigation';
import {alertRouteNames, dashboardRouteNames} from './router-name';
import AlertDetailSreen from '../screens/alerts/alert-detail';

const Stack = createStackNavigator();

const CommonNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigation"
      screenOptions={{
        gestureEnabled: false,
        // animationTypeForReplace: 'push',
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        cardStyleInterpolator: ({current, next, layouts}: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
                {
                  scale: next
                    ? next.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.9],
                      })
                    : 1,
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
          };
        },
      }}>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={dashboardRouteNames.Notify}
        component={NotifySreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={alertRouteNames.AlertDetail}
        component={AlertDetailSreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CommonNavigation;
