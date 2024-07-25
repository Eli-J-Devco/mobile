/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import SettingSreen from '../screens/setting';
import AlertConfigSreen from '../screens/setting/alert-config';
import PVModelSettingsSreen from '../screens/setting/pv-model-settings';
import SiteSettingSreen from '../screens/setting/site-setting';
import {settingRouteNames} from './router-name';

const Stack = createStackNavigator();

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
        name={settingRouteNames.Setup}
        component={SettingSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={settingRouteNames.AlertConfig}
        component={AlertConfigSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={settingRouteNames.SiteSetting}
        component={SiteSettingSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={settingRouteNames.PVModelSettings}
        component={PVModelSettingsSreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigation;
