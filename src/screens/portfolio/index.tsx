/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrimaryLayoutDetail from '../../layouts/PrimaryLayoutDetail';
import PortFolio from '../../modules/portfolio';

const PortfolioSreen = () => {
  return (
    <PrimaryLayoutDetail>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <PortFolio />
      </ScrollView>
    </PrimaryLayoutDetail>
  );
};

export default PortfolioSreen;
