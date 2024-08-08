/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import DevicesScreen from '../screens/devices';
import {devicesRouteNames} from './router-name';
import FilterColumnsScreen from '../screens/devices/filter-colums';
import SummaryDetailScreen from '../screens/devices/summary-detail';
import {
  NAVIGATION_CARD_SCALE,
  NAVIGATION_OVERLAY_OPACITY,
} from '../constants/view/display';

const Stack = createStackNavigator();

const DevicesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        // animationTypeForReplace: 'push',
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                        outputRange: [1, NAVIGATION_CARD_SCALE],
                      })
                    : 1,
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, NAVIGATION_OVERLAY_OPACITY],
              }),
            },
          };
        },
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
