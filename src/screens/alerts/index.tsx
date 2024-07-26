/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrimaryLayout from '../../layouts/PrimaryLayout';
import Alerts from '../../modules/alerts';
import MyScrollView from '../../common/base/MyScrollView';

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
