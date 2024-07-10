/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import PVModelSettings from '../../../modules/settings/components/PVModelSettings';

const PVModelSettingsSreen = () => {
  const theme = useThemeContext();

  return (
    <PrimaryLayoutDetailItem
      title="PV Model Settings"
      background={theme.palette.background.tertiary}>
      <PVModelSettings />
    </PrimaryLayoutDetailItem>
  );
};

export default PVModelSettingsSreen;
