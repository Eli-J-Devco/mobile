/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Devices from '../../modules/devices';

const DevicesScreen = () => {
  return (
    <MainLayout backgroundColor="#fff">
      <Devices />
    </MainLayout>
  );
};

export default DevicesScreen;
