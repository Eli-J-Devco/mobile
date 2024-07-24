/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, TextStyle, FlatList} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import MySelect, {MySelectProps} from '../../base/MySelect';

interface SelectLabelProps extends MySelectProps {
  label: string;
  layout?: 'vertical' | 'horizontal';
  labelStyle?: TextStyle;
  span?: number;
}

const SelectLabel = ({
  layout = 'vertical',
  labelStyle,
  label,
  value,
  options,
  placeholder,
  onChange,
  containerStyle,
  span,
}: SelectLabelProps) => {
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
        lable={label}
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
