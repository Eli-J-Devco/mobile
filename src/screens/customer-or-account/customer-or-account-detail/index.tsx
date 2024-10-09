/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import CustomerOrAccountDetail from '../../../modules/customersOrAccounts/components/CustomerOrAccountDetail';

const CustomerOrAccountDetailSreen = () => {
  return (
    <PrimaryLayoutDetailItem title="(Testing)CO-06-0001 Alamosa" background="#fff">
      <CustomerOrAccountDetail />
    </PrimaryLayoutDetailItem>
  );
};

export default CustomerOrAccountDetailSreen;
