import React, { forwardRef } from 'react';
import { StyleSheet, TextInput, TextStyle } from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import MyTextInput from '../../base/MyTextInput';

export interface PrimaryInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  containerStyle?: TextStyle;
  placeholderTextColor?: string;
  numberOfLines?: number;
  multiline?: boolean;
}

const PrimaryInput = forwardRef<TextInput, PrimaryInputProps>((props, ref) => {
  const theme = useThemeContext();
  const {
    value,
    onChange,
    placeholder,
    containerStyle,
    placeholderTextColor,
    numberOfLines,
    multiline,
  } = props;

  const onChangeText = (text: string) => {
    if (onChange) onChange(text);
  };

  return (
    <MyTextInput
      ref={ref}
      multiline={multiline}
      value={value}
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: theme.palette.background.primary,
          borderColor: theme.palette.borderColor.base,
          textAlignVertical: multiline ? 'top' : 'center',
        },
        containerStyle,
      ]}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      numberOfLines={numberOfLines}
    />
  );
});

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
