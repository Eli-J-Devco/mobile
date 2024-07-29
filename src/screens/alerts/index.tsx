/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import MyScrollView from '../../common/base/MyScrollView';
import PrimaryLayout from '../../layouts/PrimaryLayout';
import Alerts from '../../modules/alerts';

const AlertSreen = () => {
  return (
    <PrimaryLayout bgColor="#fff">
      <MyScrollView>
        <Alerts />
      </MyScrollView>
    </PrimaryLayout>
  );
};

export default AlertSreen;
