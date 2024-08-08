/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {View, ViewStyle} from 'react-native';
import {GAP_DEFAULT} from '../../../constants/view/space';

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
          gap: gap ? gap : GAP_DEFAULT,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Grid;
