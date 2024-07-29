/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import MyTextInput from '../../../common/base/MyTextInput';

const ForgotForm = () => {
  return (
    <View style={styles.LoginFormForm}>
      <MyTextInput placeholder="Email" />

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Summit</Text>
      </Pressable>
    </View>
  );
};

export default ForgotForm;

const styles = StyleSheet.create({
  LoginFormForm: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 48,
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  btnText: {
    color: '#212121',
    fontSize: 24,
    fontWeight: '700',
  },
});
