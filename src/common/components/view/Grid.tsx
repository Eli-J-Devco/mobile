/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ViewStyle} from 'react-native';
import React from 'react';

interface IGridProps {
  style?: ViewStyle;
  gap?: number;
  flexDirection?: 'column' | 'row';
  children: React.ReactNode;
}

const Grid = ({style, gap, flexDirection = 'row', children}: IGridProps) => {
  return (
    <View
      style={[
        {
          display: 'flex',
          flexDirection,
          gap: gap ? gap : 8,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Grid;
