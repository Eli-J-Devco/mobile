/* eslint-disable no-magic-numbers */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {icons} from '../assets';
import IconImage from '../common/components/icons/IconImage';
import useHideTabBottom from '../hooks/useHideTabBottom';
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getIcons = (focused: boolean, name: string): any => {
    let asset = assetsNotSelectMap[name];

    if (focused) {
      asset = assetsSelectMap[name];
    }

    return asset;
  };

  // const [keyboardHeight, setKeyboardHeight] = useState(false);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     event => {
  //       setKeyboardHeight(true);
  //     },
  //   );

  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {
  //       setKeyboardHeight(false);
  //     },
  //   );

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        // console.log('----route.name----: ', route);
        return {
          tabBarHideOnKeyboard: true,
          headerShown: false,
          // tabBarVisible: hide ? false : true,
          tabBarStyle: {
            display: hide ? 'none' : 'flex',
            backgroundColor: '#DCDCDC',
            borderTopWidth: 0,
            // paddingVertical: 4,
            paddingTop: 8,
            height: Platform.OS === 'ios' ? 80 : 65,
            // position: 'absolute',
            // left: 0,
            // right: 0,
            // bottom: 0,
            elevation: 0,
          },
          tabBarActiveTintColor: '#F0DB2B',
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                padding: 4,
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
      {/* <Tab.Screen
        name={routeName.Menu}
        component={MenuScreen}
        options={{
          tabBarLabel: routeName.Menu,
          // tabBarActiveTintColor: '#F0DB2B',
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      /> */}
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
