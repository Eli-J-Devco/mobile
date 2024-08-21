/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React, {memo, useMemo, useState} from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';
import RadioButtonGroupColumn from '../../../../common/components/selection-controls/RadioButtonGroupColumn';
import RadioButton from '../../../../common/components/selection-controls/RadioButton';

const DevicsCategoryData: IRadio[] = [
  {
    label: 'COMM',
    value: 'COMM',
  },
  {
    label: 'ERROR',
    value: 'ERROR',
  },
  {
    label: 'INFO',
    value: 'INFO',
  },
  {
    label: 'PRODUCTION',
    value: 'PRODUCTION',
  },
  {
    label: 'DEBUG',
    value: 'DEBUG',
  },
  {
    label: 'FATAL',
    value: 'FATAL',
  },
];

const DevicesCategory = () => {
  const theme = useThemeContext();

  const [devicsCategoryAll, setDevicesCategoryAll] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [devicsCategory, setDevicesCategory] = useState<string[]>([]);

  const titleStyle: TextStyle = useMemo(
    () => ({
      color: theme.palette.text.primary,
      fontSize: theme.font.size.sm,
      fontWeight: '700',
    }),
    [theme],
  );

  const handleDevicsCategoryAll = (value: string, isChecked: boolean) => {
    setDevicesCategoryAll(isChecked);
  };

  const handleDevicsCategoryChange = (value: string[], checkAll: boolean) => {
    setDevicesCategoryAll(checkAll);
    setDevicesCategory(value);
  };

  return (
    <View style={styles.wraped}>
      <View style={styles.row}>
        <Text style={titleStyle}>Device Categorize:</Text>
        <RadioButton
          checked={devicsCategoryAll}
          value="ALL"
          touchableOpacityStyles={styles.touchableOpacityAll}
          onChange={handleDevicsCategoryAll}>
          ALL
        </RadioButton>
      </View>

      <RadioButtonGroupColumn
        checkAll={devicsCategoryAll}
        numColumns={3}
        options={DevicsCategoryData}
        touchableOpacityStyles={styles.touchableOpacityStyles}
        textSize={theme.font.size.s}
        onChange={handleDevicsCategoryChange}
      />
    </View>
  );
};

export default memo(DevicesCategory);

const styles = StyleSheet.create({
  wraped: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    gap: 16,
    borderRadius: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },
  touchableOpacityAll: {
    borderRadius: 20,
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  touchableOpacityStyles: {
    flex: 1,
    borderRadius: 20,
  },
});
