/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IconImage from '../common/components/icons/IconImage';
import BottomNavigation from './BottomNavigation';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import AlertsNavigation from './AlertsNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomSidebarMenu {...props} />}
      initialRouteName="BottomNavigation"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#373433',
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 14,
        },
        drawerItemStyle: {
          marginVertical: -5,
          paddingVertical: 0,
        },
      }}>
      <Drawer.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => <IconImage size={20} iconName="home" />,
          drawerItemStyle: {marginVertical: 0, paddingVertical: 0},
        }}
      />
      <Drawer.Screen
        name="Alert"
        component={AlertsNavigation}
        options={{
          drawerLabel: 'Alert',
          drawerIcon: () => <IconImage size={20} iconName="bell" />,
          drawerItemStyle: {marginVertical: 0, paddingVertical: 0},
        }}
      />
    </Drawer.Navigator>
  );
}
