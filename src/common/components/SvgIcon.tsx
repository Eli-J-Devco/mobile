/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {WithLocalSvg} from 'react-native-svg';
import {icons} from '../../assets';

interface Props {
  iconName: IconNameType;
  w?: number;
  h?: number;
}

/**
 * @description Get icon from svg file
 * @author qui.nguyen 2024-07-1
 * @param {iconName, w, h}
 * @returns Svg icon
 */

const SvgIcon = ({iconName, h = 24, w = 24}: Props) => {
  return <WithLocalSvg width={w} height={h} asset={icons[iconName]} />;
};

export default SvgIcon;
