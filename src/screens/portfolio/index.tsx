/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrimaryLayoutDetail from '../../layouts/PrimaryLayoutDetail';
import PortFolio from '../../modules/portfolio';
import MyScrollView from '../../common/base/MyScrollView';

const PortfolioSreen = () => {
  return (
    <PrimaryLayoutDetail>
      <MyScrollView>
        <PortFolio />
      </MyScrollView>
    </PrimaryLayoutDetail>
  );
};

export default PortfolioSreen;
