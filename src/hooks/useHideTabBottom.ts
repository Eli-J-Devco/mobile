/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {navigationRef} from '../..';
import SREEN_HIDE_TAB_BOTTOM from '../constants/sreenHideTabBottom';

/**
 * @description Check the current screen is in the list of screens that need to hide the bottom tab bar
 * @author qui.nguyen 2024-07-5
 * @param {void}
 * @returns boolean
 */

const useHideTabBottom = () => {
  const currentSreenName = navigationRef.getCurrentRoute()?.name;

  return currentSreenName
    ? SREEN_HIDE_TAB_BOTTOM.includes(currentSreenName)
    : false;
};
export default useHideTabBottom;
