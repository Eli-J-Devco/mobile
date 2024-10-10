/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import LastModified from '../../../modules/customersOrAccounts/components/LastModified';

const LastModifiedSreen = () => {
  return (
    <PrimaryLayoutDetailItem title="Last modified" background="#fff">
      <LastModified />
    </PrimaryLayoutDetailItem>
  );
};

export default LastModifiedSreen;
