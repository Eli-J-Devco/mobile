/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import MyScrollView from '../../common/base/MyScrollView';
import PrimaryLayoutDetail from '../../layouts/PrimaryLayoutDetail';
import Reports from '../../modules/reports';
import PrimaryLayout from '../../layouts/PrimaryLayout';
import MainLayout from '../../layouts/MainLayout';

const ReportsSreen = () => {
  return (
    <MainLayout>
      <MyScrollView>
        <Reports />
      </MyScrollView>
    </MainLayout>
  );
};

export default ReportsSreen;
