/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useCallback, useState} from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import RadioButton from './RadioButton';

interface IRadioButtonGroupProps {
  value: string;
  activeBgColor?: string;
  activeTextColor?: string;
  textStyles?: TextStyle;
  touchableOpacityStyles?: ViewStyle;
  textSize?: number;
  options: IRadio[];
  onChange: (value: string) => void;
}

const RadioButtonGroup = ({
  value,
  options,
  activeBgColor,
  activeTextColor,
  textStyles,
  textSize,
  touchableOpacityStyles,
  onChange,
}: IRadioButtonGroupProps) => {
  const [selected, setSelected] = useState<string>(value);

  const handleSelect = useCallback((value: string, isChecked: boolean) => {
    if (isChecked) {
      setSelected(value);
      onChange(value);
    } else {
      setSelected('');
      onChange('');
    }
  }, []);

  return (
    <View style={styles.container}>
      {options.map(_option => (
        <RadioButton
          key={_option.value}
          checked={selected === _option.value}
          value={_option.value}
          activeBgColor={activeBgColor}
          activeTextColor={activeTextColor}
          touchableOpacityStyles={touchableOpacityStyles}
          textStyles={textStyles}
          textSize={textSize}
          onChange={handleSelect}>
          {_option.label}
        </RadioButton>
      ))}
    </View>
  );
};

export default RadioButtonGroup;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
});
