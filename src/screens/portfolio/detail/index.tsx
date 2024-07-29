/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import PortfolioDetails from '../../../modules/portfolio/components/detail';

const PortfolioDetailSreen = () => {
  return (
    <PrimaryLayoutDetailItem title="Target Eastvale - T1961">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <PortfolioDetails />
      </ScrollView>
    </PrimaryLayoutDetailItem>
  );
};

export default PortfolioDetailSreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
});
