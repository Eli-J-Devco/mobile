/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {StyleSheet, Text, TextStyle, TouchableOpacity} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import MyCheckBox, {IMyCheckBoxProps} from './MyCheckBox';

interface IMyCheckBoxTextProps extends IMyCheckBoxProps {
  textStyle?: TextStyle;
  span?: number;
  children: string;
}

const MyCheckBoxText = ({
  span,
  value,
  onChecked,
  checkBoxStyle,
  iconSize,
  textStyle,
  children,
}: IMyCheckBoxTextProps) => {
  const theme = useThemeContext();

  const [isChecked, setIsChecked] = useState(false);

  const text: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '400',
  };

  const gridStyle = span
    ? {
        flex: span,
      }
    : {};

  return (
    <TouchableOpacity
      style={[styles.container, gridStyle]}
      activeOpacity={0.5}
      onPress={() => {
        setIsChecked(!isChecked);
        onChecked && onChecked(!isChecked, value);
      }}>
      <MyCheckBox
        value={value}
        checked={isChecked}
        checkBoxStyle={checkBoxStyle}
        iconSize={iconSize}
      />
      <Text style={[text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MyCheckBoxText;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
