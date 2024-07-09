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
}: InputLabelProps) => {
  const theme = useThemeContext();

  const labelTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <View
      style={[
        {
          display: 'flex',
          flexDirection: layout === 'vertical' ? 'column' : 'row',
          gap: 4,
          alignItems: layout === 'vertical' ? 'flex-start' : 'center',
        },
      ]}>
      <Text style={[labelTextStyle, labelStyle]}>{label}</Text>
      <PrimaryInput
        value={value}
        containerStyle={containerStyle}
        onChange={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default InputLabel;
