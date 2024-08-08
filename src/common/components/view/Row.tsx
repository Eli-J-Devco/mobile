/* eslint-disable react-native/no-inline-styles */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {View, ViewStyle} from 'react-native';
import {GAP_DEFAULT} from '../../../constants/view/space';

interface IRowProps {
  style?: ViewStyle;
  gap?: number;
  children: React.ReactNode;
}

const Row = ({style, gap, children}: IRowProps) => {
  return (
    <View
      style={[
        {
          display: 'flex',
          gap: gap ? gap : GAP_DEFAULT,
          flex: 1,
          flexDirection: 'row',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Row;
