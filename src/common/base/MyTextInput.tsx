/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';

const MyTextInput = (props: TextInputProps) => {
  const theme = useThemeContext();

  return (
    <TextInput
      placeholderTextColor={theme.palette.text.primary}
      style={[styles.container, {color: theme.palette.text.primary}]}
      {...props}
    />
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    height: 48,
    paddingRight: 8,
  },
});
