/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet} from 'react-native';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import PortfolioFilter from '../../../modules/portfolio/components/PortfolioFilter';

const PortfolioFilterSreen = () => {
  return (
    <PrimaryLayoutDetailItem contentStyle={styles.container}>
      <PortfolioFilter />
    </PrimaryLayoutDetailItem>
  );
};

export default PortfolioFilterSreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});
