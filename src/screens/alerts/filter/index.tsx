/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import PrimaryLayout from '../../../layouts/PrimaryLayout';
import AlertFilter from '../../../modules/alerts/components/AlertFilter';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';

const AlertFilterSreen = () => {
  return (
    <PrimaryLayoutDetailItem>
      <AlertFilter />
    </PrimaryLayoutDetailItem>
  );
};

export default AlertFilterSreen;
