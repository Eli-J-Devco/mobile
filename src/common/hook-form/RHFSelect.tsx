/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import SelectLabel from '../components/select/SelectLabel';
import {StyleSheet, Text, View} from 'react-native';

interface RHFSelect<T> {
  name: string;
  label: string;
  options: Array<ISelectOption<T>>;
}

const RHFSelect = <T extends number | string = number>({
  name,
  label,
  options,
}: RHFSelect<T>) => {
  const {control} = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState: {error}}) => (
        <View style={styles.wrapped}>
          <SelectLabel<T>
            label={label}
            value={field.value}
            onChange={field.onChange}
            options={options}
          />
          {error && <Text style={styles.errText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default RHFSelect;

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
