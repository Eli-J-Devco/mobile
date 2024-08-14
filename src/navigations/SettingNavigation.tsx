/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import {
  NAVIGATION_CARD_SCALE,
  NAVIGATION_OVERLAY_OPACITY,
} from '../constants/view/display';
import SettingSreen from '../screens/setting';
import AlertConfigSreen from '../screens/setting/alert-config';
import PVModelSettingsSreen from '../screens/setting/pv-model-settings';
import SiteSettingSreen from '../screens/setting/site-setting';

const Stack = createStackNavigator<SettingStackParamList>();

const SettingNavigation = () => {
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
        name="Setup"
        component={SettingSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlertConfig"
        component={AlertConfigSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SiteSetting"
        component={SiteSettingSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PVModelSettings"
        component={PVModelSettingsSreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigation;
