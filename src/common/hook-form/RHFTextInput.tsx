/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {StyleSheet, Text, TextInputProps, View} from 'react-native';
import MyTextInput from '../base/MyTextInput';
import MyTouchableOpacity from '../base/MyTouchableOpacity';

type Props = TextInputProps & {
  name: string;
  type?: 'passwork' | 'text';
};

const RHFTextInput = ({name, type = 'passwork', ...other}: Props) => {
  const {control} = useFormContext();
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState: {error}}) => (
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <MyTextInput
              {...field}
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry={type === 'text' ? false : !showPass}
              {...other}
            />
            {type === 'passwork' && (
              <MyTouchableOpacity
                touchableOpacityStyle={styles.touchableOpacityStyle}
                onPress={() => setShowPass(!showPass)}>
                <Text> {!showPass ? 'Show' : 'hidden'}</Text>
              </MyTouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.textColor}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default RHFTextInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    position: 'relative',
  },
  touchableOpacityStyle: {position: 'absolute', top: '35%', right: 10},
  textColor: {
    color: 'red',
    fontSize: 12,
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    alignItems: 'flex-start',
    gap: 6,
  },
});
