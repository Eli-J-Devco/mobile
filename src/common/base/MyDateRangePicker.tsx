/* eslint-disable @typescript-eslint/no-explicit-any */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import IconImage from '../components/icons/IconImage';

interface IMyDateRangePicker {
  value?: [any, any];
  placeholder?: string;
  onChange?: (value: any) => void;
  containerStyle?: ViewStyle;
}

const MyDateRangePicker = ({
  placeholder,

  containerStyle,
}: IMyDateRangePicker) => {
  const theme = useThemeContext();
  const [fromdate, setFromDate] = useState<any>(new Date());
  const [todate, setToDate] = useState<any>(new Date());
  const [formOpen, setFormOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const onChangeFromDateValue = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;

    setFromDate(currentDate);
    setFormOpen(false);
    setToOpen(true);
  };
  const onChangeToDateValue = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;

    setToDate(currentDate);
    setToOpen(false);
    // if (onChange) onChange(currentDate);
  };

  //   useEffect(() => {
  //     if (!!value) {
  //       setFromDate(value);
  //     }
  //   }, [value]);

  const valueStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.container, containerStyle]}
        onPress={() => setFormOpen(true)}>
        <View style={styles.icon}>
          <IconImage iconName="arrowIndicateDirectionLeft" size={14} />
        </View>
        <View style={styles.contentWraped}>
          <Text style={valueStyle}>
            {fromdate ? fromdate.toLocaleDateString() : placeholder}
          </Text>
          <Text>-</Text>
          <Text style={valueStyle}>
            {todate ? todate.toLocaleDateString() : placeholder}
          </Text>
        </View>
        <View style={styles.icon}>
          <IconImage iconName="arrowIndicateDirectionRight" size={14} />
        </View>
      </TouchableOpacity>

      {formOpen && (
        <DateTimePicker
          testID="fromDateTimePicker"
          value={fromdate}
          mode="date"
          is24Hour={true}
          onChange={onChangeFromDateValue}
        />
      )}

      {toOpen && (
        <DateTimePicker
          minimumDate={fromdate}
          testID="toDateTimePicker"
          value={todate}
          mode="date"
          is24Hour={true}
          onChange={onChangeToDateValue}
        />
      )}
    </>
  );
};

export default MyDateRangePicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#C5C5C5',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // gap: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  contentWraped: {
    flex: 80,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  icon: {
    flex: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
});
