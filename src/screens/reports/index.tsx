/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import MyScrollView from '../../common/base/MyScrollView';
import MainLayout from '../../layouts/MainLayout';
import Reports from '../../modules/reports';

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
