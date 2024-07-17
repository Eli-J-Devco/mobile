/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ReportsSreen from '../screens/reports';
import {reportsRouteNames} from './router-name';
import ReportSetupSreen from '../screens/reports/reports-setup';
import ReportFilterSreen from '../screens/reports/report-filter';
import AdditionalDataSreen from '../screens/reports/additional-data';

const Stack = createNativeStackNavigator();

const ReportsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={reportsRouteNames.Reports}
        component={ReportsSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={reportsRouteNames.ReportSetup}
        component={ReportSetupSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={reportsRouteNames.ReportFilter}
        component={ReportFilterSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={reportsRouteNames.AdditionalData}
        component={AdditionalDataSreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ReportsNavigation;
