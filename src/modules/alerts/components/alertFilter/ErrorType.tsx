/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, TextStyle, StyleSheet} from 'react-native';
import React, {memo, useMemo, useState} from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';
import RadioButton from '../../../../common/components/selection-controls/RadioButton';
import RadioButtonGroupColumn from '../../../../common/components/selection-controls/RadioButtonGroupColumn';

const ERROR_TYPE: IRadio[] = [
  {
    label: 'System Disconnect',
    value: 'SystemDisconnect',
  },
  {
    label: 'String Performance',
    value: 'StringPerformance',
  },
  {
    label: 'Performance Index',
    value: 'PerformanceIndex',
  },
  {
    label: 'Zero Generation',
    value: 'ZeroGeneration',
  },
  {
    label: 'Device Fault',
    value: 'Device Fault',
  },
];

const ErrorType = () => {
  const theme = useThemeContext();
  const [errorTypeAll, setErrorTypeAll] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorType, setErrorType] = useState<string[]>([]);

  const titleStyle: TextStyle = useMemo(
    () => ({
      color: theme.palette.text.primary,
      fontSize: theme.font.size.sm,
      fontWeight: '700',
    }),
    [theme],
  );

  const handleErrorTypeAll = (value: string, isChecked: boolean) => {
    setErrorTypeAll(isChecked);
  };

  const handleErrorTypeChange = (value: string[], checkAll: boolean) => {
    // console.log('----value----: ', value, checkAll);
    setErrorTypeAll(checkAll);
    setErrorType(value);
  };

  return (
    <View style={styles.wraped}>
      <View style={styles.row}>
        <Text style={titleStyle}>Error Type:</Text>
        <RadioButton
          checked={errorTypeAll}
          value="ALL"
          touchableOpacityStyles={styles.touchableOpacityAll}
          onChange={handleErrorTypeAll}>
          ALL
        </RadioButton>
      </View>
      <RadioButtonGroupColumn
        checkAll={errorTypeAll}
        numColumns={2}
        options={ERROR_TYPE}
        // touchableOpacityStyles={styles.errTypeBtn}
        textSize={theme.font.size.s}
        onChange={handleErrorTypeChange}
      />
    </View>
  );
};

export default memo(ErrorType);

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
