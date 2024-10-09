/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import CustomerOrAccount from '../../modules/customersOrAccounts';
import PrimaryLayoutDetailItem from '../../layouts/PrimaryLayoutDetailItem';

const CustomerOrAccountSreen = () => {
  return (
    <PrimaryLayoutDetailItem title='Customer/Account' background='#fff'>
        <CustomerOrAccount/>
    </PrimaryLayoutDetailItem>
  );
};

export default CustomerOrAccountSreen;