/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import PortfolioDetails from '../../../modules/portfolio/components/detail';

const PortfolioDetailSreen = () => {
  return (
    <PrimaryLayoutDetailItem title="Target Eastvale - T1961">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <PortfolioDetails />
      </ScrollView>
    </PrimaryLayoutDetailItem>
  );
};

export default PortfolioDetailSreen;
