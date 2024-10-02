/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import AlertDetailSreen from '../screens/alerts/alert-detail';
import DrawerNavigation from './DrawerNavigation';
import {alertRouteNames} from './router-name';
import {
  NAVIGATION_CARD_SCALE,
  NAVIGATION_OVERLAY_OPACITY,
} from '../constants/view/display';
import SupportScreen from '../screens/support';
import ErrorsScreen from '../screens/errors';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{
        gestureEnabled: false,
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
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={alertRouteNames.AlertDetail}
        component={AlertDetailSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Errors"
        component={ErrorsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
