/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import MyScrollView from '../../common/base/MyScrollView';
import PrimaryLayoutDetail from '../../layouts/PrimaryLayoutDetail';
import PortFolio from '../../modules/portfolio';

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
