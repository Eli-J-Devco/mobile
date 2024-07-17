/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';

interface ITextBetweenViewProps {
  type?: 'primary' | 'alert';
  leftText: string;
  rightText?: string;
  paddingHorizontal?: number;
  backgroundColor?: string;
  borderBottom?: boolean;
  color?: 'primary' | 'secondary';
}

const TextBetweenView = ({
  type = 'primary',
  leftText,
  rightText,
  paddingHorizontal = 0,
  backgroundColor = 'transparent',
  borderBottom = true,
  color = 'primary',
}: ITextBetweenViewProps) => {
  const theme = useThemeContext();

  const styleText: any = {
    color: theme.palette.text[color],
    fontSize: theme.font.size.s,
  };

  const styleAlertText: any = {
    color: theme.palette.text[color],
    fontSize: theme.font.size.s,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: theme.palette.background.yellow,
    paddingHorizontal: 8,
  };

  const borderBottomStyle: ViewStyle = borderBottom
    ? {
        borderBottomWidth: 1,
        borderBottomColor: theme.palette.borderColor.secondary,
      }
    : {};
  return (
    <View
      style={[
        styles.container,
        borderBottomStyle,
        {paddingHorizontal, backgroundColor},
      ]}>
      <Text style={styleText}>{leftText}</Text>
      <Text style={type === 'primary' ? styleText : styleAlertText}>
        {rightText}
      </Text>
    </View>
  );
};

export default TextBetweenView;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 4,
  },
});
