/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import {icons} from '../assets';
import useHideTabBottom from '../hooks/useHideTabBottom';
import Account from '../screens/account';
import SettingSreen from '../screens/setting';
import HomeNavigation from './HomeNavigation';
import {routeName} from './router-name';
import SettingNavigation from './SettingNavigation';

const Tab = createBottomTabNavigator();

type AssetsMap = {
  [key: string]: string;
  Home: typeof icons.home;
  Menu: typeof icons.menu;
  Reports: typeof icons.chart;
  SetupNavigation: typeof icons.setting;
  Portfolio: typeof icons.bag;
};

const assetsNotSelectMap: AssetsMap = {
  Home: icons.home,
  Menu: icons.menu,
  Reports: icons.chart,
  SetupNavigation: icons.setting,
  Portfolio: icons.bag,
};

const assetsSelectMap: AssetsMap = {
  Home: icons.home,
  Menu: icons.menu,
  Reports: icons.chart,
  SetupNavigation: icons.setting,
  Portfolio: icons.bag,
};

const BottomNavigation = (): JSX.Element => {
  const hide = useHideTabBottom();
  const getIcons = (focused: boolean, name: string): any => {
    let asset = assetsNotSelectMap[name];
    if (focused) {
      asset = assetsSelectMap[name];
    }
    return asset;
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        // console.log('----route.name----: ', route);
        return {
          headerShown: false,
          tabBarVisible: hide ? false : true,
          tabBarStyle: {
            display: hide ? 'none' : 'flex',
            backgroundColor: '#DCDCDC',
            borderTopWidth: 0,
            paddingVertical: 16,
            height: 80,
          },
          tabBarActiveTintColor: '#F0DB2B',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: 8,
                borderRadius: 20,
                backgroundColor: focused ? '#F0DB2B' : '#DCDCDC',
              }}>
              <WithLocalSvg asset={getIcons(focused, route.name)} />
            </View>
          ),
        };
      }}>
      <Tab.Screen
        name={routeName.Home}
        component={HomeNavigation}
        options={{
          tabBarLabel: routeName.Home,
          // tabBarActiveTintColor: '#F0DB2B',
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name={routeName.Menu}
        component={Account}
        options={{
          tabBarLabel: routeName.Menu,
          // tabBarActiveTintColor: '#F0DB2B',
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name={routeName.Setup}
        component={SettingNavigation}
        options={{
          tabBarLabel: 'Setup',
          // tabBarActiveTintColor: '#F0DB2B',
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 16,
    color: '#000',
  },
});
