/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface IMyTouchableOpacityProps {
  touchableOpacityProps?: TouchableOpacityProps;
  onPress?: () => void;
  children: React.ReactNode;
}

const MyTouchableOpacity = (props: IMyTouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        }
      }}
      {...props.touchableOpacityProps}>
      {props.children}
    </TouchableOpacity>
  );
};

export default MyTouchableOpacity;
