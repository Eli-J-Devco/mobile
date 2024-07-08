/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Portfolio from './components/portfolio';
import Alerts from './components/alerts';

const Dashboard = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        paddingBottom: 8,
      }}>
      <Portfolio />
      <Alerts />
    </ScrollView>
  );
};

export default Dashboard;
