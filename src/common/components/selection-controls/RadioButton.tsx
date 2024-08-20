/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import {
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

interface IRadioButtonProps {
  checked?: boolean;
  value: string;
  activeBgColor?: string;
  activeTextColor?: string;
  touchableOpacityProps?: TouchableOpacityProps;
  textProps?: TextProps;
  textStyles?: TextStyle;
  touchableOpacityStyles?: ViewStyle;
  textSize?: number;
  onChange?: (value: string, isChecked: boolean) => void;
  children: React.ReactNode;
}

const RadioButton = ({
  checked,
  value,
  activeTextColor,
  activeBgColor,
  touchableOpacityProps,
  textProps,
  textStyles,
  touchableOpacityStyles,
  textSize,
  onChange,
  children,
}: IRadioButtonProps) => {
  const theme = useThemeContext();

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (checked !== undefined) {
      setSelected(checked);
    }
  }, [checked]);

  const btnTextStyle: TextStyle = useMemo(() => {
    return {
      color: selected
        ? activeTextColor
          ? activeTextColor
          : theme.palette.text.white
        : theme.palette.text.primary,
      fontSize: textSize ? textSize : theme.font.size.xs,
      fontWeight: '400',
    };
  }, [selected, theme]);

  const colorActive: ViewStyle = useMemo(() => {
    return activeBgColor
      ? {
          backgroundColor: selected ? activeBgColor : '#F0F0F0',
        }
      : {backgroundColor: selected ? theme.palette.background.dark : '#F0F0F0'};
  }, [selected, theme]);

  const onPress = useCallback(() => {
    setSelected(!selected);
    if (onChange) {
      onChange(value, !selected);
    }
  }, [selected, value]);

  return (
    <TouchableOpacity
      style={[styles.btn, colorActive, touchableOpacityStyles]}
      activeOpacity={0.5}
      onPress={() => {
        requestAnimationFrame(() => {
          onPress();
        });
      }}
      {...touchableOpacityProps}>
      <Text style={[btnTextStyle, textStyles]} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
});
