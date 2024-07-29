/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  inputProps?: TextInputProps;
  inputStyle?: ViewStyle | TextStyle;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  text?: string;
}

const MyTextInputIcon = ({inputProps, inputStyle, icon, text}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.input, {...inputStyle}]} {...inputProps} />
      <Pressable style={styles.icon}>
        {text ? <Text>{text}</Text> : <Image source={icon} />}
      </Pressable>
    </View>
  );
};

export default MyTextInputIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    height: 48,
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    gap: 8,

    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    // flex: 8,
    height: 48,
    width: '80%',
    color: '#000',
  },
  icon: {
    // flex: 2,
    color: '#212121',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
  },
});
