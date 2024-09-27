/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';

const MyTextInput = forwardRef<TextInput, TextInputProps>((props, ref) => {
  const theme = useThemeContext();

  return (
    <TextInput
      ref={ref}
      placeholderTextColor={theme.palette.text.primary}
      style={[styles.container, {color: theme.palette.text.primary}]}
      {...props}
    />
  );
});

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    height: 48,
    paddingHorizontal: 8,
  },
});
