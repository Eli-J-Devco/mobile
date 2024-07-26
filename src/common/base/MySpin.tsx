/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ActivityIndicator} from 'react-native';

interface IMySpinProps {
  size?: 'small' | 'large';
  color?: string;
}

const MySpin = ({size = 'small', color = '#fff'}: IMySpinProps) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default MySpin;
