/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import SvgIcon from '../components/SvgIcon';

interface MyDatePickerProps {
  value?: any;
  placeholder?: string;
  onChange?: (value: any) => void;
  containerStyle?: ViewStyle;
}

const MyDatePicker = ({
  value,
  placeholder,
  onChange,
  containerStyle,
}: MyDatePickerProps) => {
  const theme = useThemeContext();
  const [date, setDate] = useState<any>(new Date());
  const [show, setShow] = useState(false);

  const onChangeValue = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    if (onChange) onChange(currentDate);
  };

  useEffect(() => {
    if (!!value) {
      setDate(value);
    }
  }, [value]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.container, containerStyle]}
        onPress={() => setShow(true)}>
        <View style={styles.contentWraped}>
          <Text
            style={{
              color: theme.palette.text.primary,
              fontSize: theme.font.size.s,
              fontWeight: '400',
            }}>
            {!!date ? date.toLocaleDateString() : placeholder}
          </Text>
        </View>
        <View style={styles.icon}>
          <SvgIcon iconName="datePicker" w={12} h={12} />
        </View>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChangeValue}
        />
      )}
    </>
  );
};

export default MyDatePicker;

const styles = StyleSheet.create({
  container: {
    height: 37,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#C5C5C5',
    paddingLeft: 8,
    paddingVertical: 3,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 4,
    gap: 8,
  },
  contentWraped: {
    flex: 95,
  },
  icon: {
    flex: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
});
