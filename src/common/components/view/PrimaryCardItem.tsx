/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';

interface IPrimaryCardItemProps {
  gap?: number;
  padding?: number;
  layout?: 'row' | 'column';
  bgColor?: string;
  children: React.ReactNode;
}

const PrimaryCardItem = ({
  gap = 4,
  padding = 8,
  layout = 'row',
  bgColor = '',
  children,
}: IPrimaryCardItemProps) => {
  const theme = useThemeContext();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor ? bgColor : theme.palette.background.primary,
          flexDirection: layout,
          gap,
          padding,
        },
      ]}>
      {children}
    </View>
  );
};

export default PrimaryCardItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    borderRadius: 8,
    shadowColor: 'rgba(16, 24, 40, 0.3)',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 16,
  },
});
