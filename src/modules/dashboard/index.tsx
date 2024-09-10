/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Alerts from './components/alerts';
import Portfolio from './components/portfolio';

const Dashboard = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Portfolio />
      <Alerts />
    </ScrollView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({  
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    paddingBottom: 8,
  },
});
