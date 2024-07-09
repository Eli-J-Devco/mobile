import React, {useEffect} from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import MyTextInput from '../../base/MyTextInput';
import useThemeContext from '../../../hooks/useThemeContext';

export interface PrimaryInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  containerStyle?: TextStyle;
  placeholderTextColor?: string;
}

const PrimaryInput = ({
  value,
  onChange,
  placeholder,
  containerStyle,
  placeholderTextColor,
}: PrimaryInputProps) => {
  const theme = useThemeContext();

  const onChangeText = (text: string) => {
    if (onChange) onChange(text);
  };

  return (
    <MyTextInput
      value={value}
      style={[
        styles.container,
        {
          backgroundColor: theme.palette.background.primary,
          borderColor: theme.palette.borderColor.base,
        },
        containerStyle,
      ]}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  container: {
    height: 37,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 8,
    paddingVertical: 3,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 4,
  },
});
