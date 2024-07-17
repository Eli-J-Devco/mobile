import React from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';

export interface PrimaryTextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  containerStyle?: TextStyle;
  placeholderTextColor?: string;
  numberOfLines?: number;
  rows?: number;
}

const PrimaryTextArea = ({
  value,
  onChange,
  placeholder,
  containerStyle,
  placeholderTextColor,
  numberOfLines,
  rows,
}: PrimaryTextAreaProps) => {
  const theme = useThemeContext();

  const onChangeText = (text: string) => {
    if (onChange) onChange(text);
  };

  return (
    <TextInput
      multiline={true}
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
      numberOfLines={5}
    />
  );
};

export default PrimaryTextArea;

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
    minHeight: 100,
  },
});
