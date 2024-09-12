/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Platform, ViewStyle } from 'react-native';
import MyDatePicker from '../../base/MyDatePicker';
import MyIosDateTimePicker from '../../base/MyIosDateTimePicker';

interface IDatePickerProps {
  value?: any;
  placeholder?: string;
  onChange?: (value: any) => void;
  containerStyle?: ViewStyle;
}

const DatePicker = ({
  value,
  placeholder,
  onChange,
  containerStyle,
}: IDatePickerProps) => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <MyIosDateTimePicker
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          containerStyle={containerStyle}
        />
      ) : (
        <MyDatePicker
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          containerStyle={containerStyle}
        />
      )}
    </>
  );
};

export default DatePicker;
