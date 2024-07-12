/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import SearchAndFilterSreen from '../screens/home/search-and-filter';
import MapScreen from '../screens/map';
import SiteOverViewSreen from '../screens/site-over-view';
import AlertsNavigation from './AlertsNavigation';
import PortfolioNavigation from './PortfolioNavigation';
import {dashboardRouteNames} from './router-name';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={dashboardRouteNames.Dashboard}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={dashboardRouteNames.AlertsNavigation}
        component={AlertsNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={dashboardRouteNames.PortfolioNavigation}
        component={PortfolioNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={dashboardRouteNames.SearchAndFilter}
        component={SearchAndFilterSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={dashboardRouteNames.SiteOverView}
        component={SiteOverViewSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={dashboardRouteNames.Map}
        component={MapScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
