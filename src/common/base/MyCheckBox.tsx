/* eslint-disable @typescript-eslint/no-explicit-any */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import SvgIcon from '../components/SvgIcon';

export interface IMyCheckBoxProps {
  value?: any;
  checked?: boolean;
  checkBoxStyle?: ViewStyle;
  iconSize?: number;
  onChecked?: (checked: boolean, value?: any) => void;
}

const MyCheckBox = ({
  value,
  checkBoxStyle,
  checked,
  iconSize = 10,
  onChecked,
}: IMyCheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsChecked(!isChecked);
        onChecked && onChecked(!isChecked, value);
      }}
      style={[
        styles.container,
        checkBoxStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: isChecked ? '#373433' : 'transparent',
        },
      ]}
      activeOpacity={0.5}>
      {isChecked && <SvgIcon w={iconSize} h={iconSize} iconName="check" />}
    </TouchableOpacity>
  );
};

export default MyCheckBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#373433',
    borderWidth: 1,
    justifyContent: 'center',
    height: 16,
    width: 16,
    borderRadius: 4,
  },
});
