/* eslint-disable react-native/no-inline-styles */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import PrimaryInput, {PrimaryInputProps} from './PrimaryInput';
import useThemeContext from '../../../hooks/useThemeContext';

interface InputLabelProps extends PrimaryInputProps {
  label: string;
  layout?: 'vertical' | 'horizontal';
  labelStyle?: TextStyle;
  height?: number;
}

const InputLabel = ({
  layout = 'vertical',
  labelStyle,
  label,
  value,
  onChange,
  placeholder,
  containerStyle,
  placeholderTextColor,
  numberOfLines,
  multiline,
}: InputLabelProps) => {
  const theme = useThemeContext();

  const labelTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: layout === 'vertical' ? 'column' : 'row',
        gap: 4,
        alignItems: layout === 'vertical' ? 'flex-start' : 'center',
      }}>
      <Text style={[labelTextStyle, labelStyle]}>{label}</Text>
      <View style={[containerStyle, {width: '100%', height: 'auto'}]}>
        <PrimaryInput
          multiline={multiline}
          value={value}
          containerStyle={containerStyle}
          onChange={onChange}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          numberOfLines={numberOfLines}
        />
      </View>
    </View>
  );
};

export default InputLabel;
