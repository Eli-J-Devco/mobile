/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Image} from 'react-native';
import {iconsImage} from '../../../assets';

interface IIconImageProps {
  iconName: IconNameType;
  size?: number;
}

/**
 * @description Get icon from svg file
 * @author qui.nguyen 2024-07-1
 * @param {iconName, w, h}
 * @returns Svg icon
 */

const IconImage = ({iconName, size = 24}: IIconImageProps) => {
  return (
    <Image
      resizeMethod="resize"
      resizeMode="contain"
      source={iconsImage[iconName]}
      style={{width: size, height: size}}
    />
  );
};

export default IconImage;
