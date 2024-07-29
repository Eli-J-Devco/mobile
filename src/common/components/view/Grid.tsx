/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {View, ViewStyle} from 'react-native';

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
        // eslint-disable-next-line react-native/no-inline-styles
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
