/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrimaryLayout from '../../layouts/PrimaryLayout';
import Alerts from '../../modules/alerts';

const AlertSreen = () => {
  return (
    <PrimaryLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <Alerts />
      </ScrollView>
    </PrimaryLayout>
  );
};

export default AlertSreen;
