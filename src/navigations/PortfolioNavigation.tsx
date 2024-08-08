/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import PortfolioSreen from '../screens/portfolio';
import ArrangeColumnsSreen from '../screens/portfolio/arrange-columns';
import PortfolioDetailSreen from '../screens/portfolio/detail';
import PortfolioFilterSreen from '../screens/portfolio/filter';
import {portfolioRouteName} from './router-name';
import {
  NAVIGATION_CARD_SCALE,
  NAVIGATION_OVERLAY_OPACITY,
} from '../constants/view/display';

const Stack = createStackNavigator();

const PortfolioNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={portfolioRouteName.Portfolio}
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
                outputRange: [0, NAVIGATION_OVERLAY_OPACITY],
              }),
            },
          };
        },
      }}>
      <Stack.Screen
        name={portfolioRouteName.Portfolio}
        component={PortfolioSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={portfolioRouteName.PortfolioDetails}
        component={PortfolioDetailSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={portfolioRouteName.PortfolioFilter}
        component={PortfolioFilterSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={portfolioRouteName.ArrangeColumns}
        component={ArrangeColumnsSreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PortfolioNavigation;
