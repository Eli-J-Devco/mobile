/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PortfolioSreen from '../screens/portfolio';
import {portfolioRouteName} from './router-name';
import PortfolioDetailSreen from '../screens/portfolio/detail';
import PortfolioFilterSreen from '../screens/portfolio/filter';
import ArrangeColumnsSreen from '../screens/portfolio/arrange-columns';

const Stack = createNativeStackNavigator();

const PortfolioNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
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
