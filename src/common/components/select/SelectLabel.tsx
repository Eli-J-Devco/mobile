/* eslint-disable react-native/no-inline-styles */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import MySelect, {MySelectProps} from '../../base/MySelect';

interface SelectLabelProps<T, M extends boolean> extends MySelectProps<T, M> {
  label: string;
  layout?: 'vertical' | 'horizontal';
  labelStyle?: TextStyle;
  span?: number;
}

const SelectLabel = <T extends number | string = number, M extends boolean = false>({
  layout = 'vertical',
  labelStyle,
  label,
  value,
  options,
  placeholder,
  onChange,
  containerStyle,
  span,
}: SelectLabelProps<T, M>) => {
  const theme = useThemeContext();

  const labelTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  const gridStyle = span
    ? {
        flex: span,
      }
    : {};

  return (
    <View
      style={[
        {
          display: 'flex',
          flexDirection: layout === 'vertical' ? 'column' : 'row',
          gap: 4,
          alignItems: layout === 'vertical' ? 'flex-start' : 'center',
        },
        gridStyle,
      ]}>
      <Text style={[labelTextStyle, labelStyle]}>{label}</Text>
      <MySelect
        label={label}
        value={value}
        options={options}
        containerStyle={containerStyle}
        onChange={onChange}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SelectLabel;
