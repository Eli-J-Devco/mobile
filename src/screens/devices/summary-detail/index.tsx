/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import SummaryDetail from '../../../modules/devices/components/summary/SummaryDetail';

const SummaryDetailScreen = () => {
  return (
    <PrimaryLayoutDetailItem background="#fff">
      <SummaryDetail />
    </PrimaryLayoutDetailItem>
  );
};

export default SummaryDetailScreen;
