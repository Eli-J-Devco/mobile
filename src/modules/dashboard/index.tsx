/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {lazy, Suspense} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import MySpin from '../../common/base/MySpin';
// import Alerts from './components/alerts';
// import Portfolio from './components/portfolio';

const PortfolioComponent = lazy(() => import('./components/portfolio'));
const AlertsComponent = lazy(() => import('./components/alerts'));

const Dashboard = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Suspense fallback={<MySpin/>}>
        <PortfolioComponent />
      </Suspense>
      <Suspense fallback={<MySpin/>}>
        <AlertsComponent />
      </Suspense>
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
