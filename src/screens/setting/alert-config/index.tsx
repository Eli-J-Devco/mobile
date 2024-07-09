/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import AlertConfig from '../../../modules/settings/components/AlertConfig';

const AlertConfigSreen = () => {
  const theme = useThemeContext();

  return (
    <PrimaryLayoutDetailItem
      title="Alert Config"
      background={theme.palette.background.tertiary}>
      <AlertConfig />
    </PrimaryLayoutDetailItem>
  );
};

export default AlertConfigSreen;
