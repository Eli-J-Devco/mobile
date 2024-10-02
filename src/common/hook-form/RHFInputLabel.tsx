/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import InputLabel from '../components/input/InputLabel';

interface RHFInputLabel {
  name: string;
  label: string;
  multiline?: boolean
  numberOfLines?:number
}

const RHFInputLabel = ({
  name,
  label,
  multiline = false,
  numberOfLines = 1
}: RHFInputLabel) => {
  const {control} = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState: {error}}) => (
        <View style={styles.wrapped}>
          <InputLabel
            {...field}
            label={label}
            value={field.value}
            onChange={field.onChange}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
          {error && <Text style={styles.errText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default RHFInputLabel;

const styles = StyleSheet.create({
  wrapped: {
    display: 'flex',
    gap: 4,
  },
  errText: {
    color: 'red',
    fontSize: 11,
    fontWeight: '400',
  },
});
