/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {TransitionSpecs, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import SearchAndFilterSreen from '../screens/home/search-and-filter';
import MapScreen from '../screens/map';
import NotifySreen from '../screens/notify';
import SiteOverViewSreen from '../screens/site-over-view';
import AlertsNavigation from './AlertsNavigation';
import DevicesNavigation from './DevicesNavigation';
import PortfolioNavigation from './PortfolioNavigation';
import ReportsNavigation from './ReportsNavigation';
import {
  dashboardRouteNames,
  devicesRouteNames,
  reportsRouteNames,
} from './router-name';
import SearchResultSreen from '../screens/home/search-and-filter/search-results';
import {NAVIGATION_CARD_SCALE} from '../constants/view/display';

const Stack = createStackNavigator();

const HomeNavigation = () => {
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
                outputRange: [0, NAVIGATION_CARD_SCALE],
              }),
            },
          };
        },
      }}>
      <Stack.Screen
        name={dashboardRouteNames.Dashboard}
        component={Home}
        options={{
          headerShown: false,
        }}
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
      <Stack.Screen
        name={devicesRouteNames.Devinavigation}
        component={DevicesNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={reportsRouteNames.ReportsNavigation}
        component={ReportsNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={dashboardRouteNames.Notify}
        component={NotifySreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={dashboardRouteNames.SearchResult}
        component={SearchResultSreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
