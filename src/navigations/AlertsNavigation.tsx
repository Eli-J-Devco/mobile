/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AlertSreen from '../screens/alerts';
import AlertFilterSreen from '../screens/alerts/filter';
import {alertRouteNames} from './router-name';
import {TransitionSpecs} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AlertsNavigation = () => {
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
