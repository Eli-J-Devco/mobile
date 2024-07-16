/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Pressable, Text, TextInput, TextInputProps, View} from 'react-native';
import MyTextInput from '../base/MyTextInput';

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
        <>
          <View
            style={{
              display: 'flex',
              width: '100%',
              height: 'auto',
              position: 'relative',
            }}>
            <MyTextInput
              {...field}
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry={type === 'text' ? false : !showPass}
              {...other}
            />
            {type === 'passwork' && (
              <Pressable
                style={{position: 'absolute', top: '35%', right: 10}}
                onPressIn={() => setShowPass(!showPass)}>
                <Text> {!showPass ? 'Show' : 'hidden'}</Text>
              </Pressable>
            )}
          </View>
          {error && <Text style={{color: 'red'}}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default RHFTextInput;
