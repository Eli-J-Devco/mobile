/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import PrimaryLayoutDetailItem from '../../../layouts/PrimaryLayoutDetailItem';
import SiteSetting from '../../../modules/settings/components/SiteSetting';

const SiteSettingSreen = () => {
  const theme = useThemeContext();

  return (
    <PrimaryLayoutDetailItem
      title="Site setting"
      background={theme.palette.background.tertiary}>
      <SiteSetting />
    </PrimaryLayoutDetailItem>
  );
};

export default SiteSettingSreen;
