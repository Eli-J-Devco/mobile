/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SettingSreen from '../screens/setting';
import AlertConfigSreen from '../screens/setting/alert-config';
import {routeName, settingRouteNames} from './router-name';
import SiteSettingSreen from '../screens/setting/site-setting';
import PVModelSettingsSreen from '../screens/setting/pv-model-settings';

const Stack = createNativeStackNavigator();

const SettingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={routeName.Setup}
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
