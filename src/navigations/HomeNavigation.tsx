/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SearchAndFilter from '../modules/dashboard/components/searchAndFilter';
import Home from '../screens/home';
import AlertsNavigation from './AlertsNavigation';
import PortfolioNavigation from './PortfolioNavigation';
import SearchAndFilterSreen from '../screens/home/search-and-filter';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlertsNavigation"
        component={AlertsNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PortfolioNavigation"
        component={PortfolioNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchAndFilter"
        component={SearchAndFilterSreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
