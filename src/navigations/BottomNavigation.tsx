/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {icons} from '../assets';
import IconImage from '../common/components/icons/IconImage';
import useHideTabBottom from '../hooks/useHideTabBottom';
import Account from '../screens/account';
import HomeNavigation from './HomeNavigation';
import {routeName} from './router-name';
import SettingNavigation from './SettingNavigation';

const Tab = createBottomTabNavigator();

type AssetsMap = {
  [key: string]: string;
  Home: 'home';
  Menu: 'menu';
  Reports: typeof icons.chart;
  SetupNavigation: 'setting';
  Portfolio: typeof icons.bag;
};

const assetsNotSelectMap: AssetsMap = {
  Home: 'home',
  Menu: 'menu',
  Reports: icons.chart,
  SetupNavigation: 'setting',
  Portfolio: icons.bag,
};

const assetsSelectMap: AssetsMap = {
  Home: 'home',
  Menu: 'menu',
  Reports: icons.chart,
  SetupNavigation: 'setting',
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

  const [keyboardHeight, setKeyboardHeight] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardHeight(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        // console.log('----route.name----: ', route);
        return {
          headerShown: false,
          tabBarVisible: hide ? false : true,
          tabBarStyle: {
            display: hide || keyboardHeight ? 'none' : 'flex',
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
              <IconImage iconName={getIcons(focused, route.name)} />
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
