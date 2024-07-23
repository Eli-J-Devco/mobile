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
import {
  dashboardRouteNames,
  devicesRouteNames,
  reportsRouteNames,
} from './router-name';
import DevicesNavigation from './DevicesNavigation';
import ReportsNavigation from './ReportsNavigation';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Animated} from 'react-native';
import {useDerivedValue, withTiming} from 'react-native-reanimated';

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
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
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
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
};

const HomeNavigation = ({navigation}: any) => {
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
    </Stack.Navigator>
  );
};

export default HomeNavigation;
