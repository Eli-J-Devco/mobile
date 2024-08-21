/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React, {memo, useMemo, useState} from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';
import RadioButton from '../../../../common/components/selection-controls/RadioButton';
import RadioButtonGroupColumn from '../../../../common/components/selection-controls/RadioButtonGroupColumn';

const DeviceCategorizeData: IRadio[] = [
  {
    label: 'PV System Inverter',
    value: 'PVSystemInverter',
  },
  {
    label: 'Production Meter',
    value: 'ProductionMeter',
  },
  {
    label: 'Solar Tracker',
    value: 'SolarTracker',
  },
  {
    label: 'Datalogger',
    value: 'Datalogger',
  },
  {
    label: 'Sensor',
    value: 'Sensor',
  },
  {
    label: 'Weather Station',
    value: 'WeatherStation',
  },
];

const DeviceCategorize = () => {
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
        numColumns={2}
        checkAll={devicsCategoryAll}
        options={DeviceCategorizeData}
        onChange={handleDevicsCategoryChange}
      />
    </View>
  );
};

export default memo(DeviceCategorize);

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
});
