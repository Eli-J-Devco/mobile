/* eslint-disable @typescript-eslint/no-explicit-any */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import IconImage from '../components/icons/IconImage';

interface MyIosDateTimePickerProps {
  value?: any;
  placeholder?: string;
  onChange?: (value: any) => void;
  containerStyle?: ViewStyle;
}

const MyIosDateTimePicker = ({
  value,
  placeholder,
  onChange,
  containerStyle,
}: MyIosDateTimePickerProps) => {
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
    if (value) {
      setDate(value);
    }
  }, [value]);

  const dateStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.container, containerStyle]}
        onPress={() => setShow(true)}>
        <View style={styles.contentWraped}>
          <Text style={dateStyle}>
            {date ? date.toLocaleDateString() : placeholder}
          </Text>
        </View>
        <View style={styles.icon}>
          <IconImage iconName="datePicker" size={14} />
        </View>
      </TouchableOpacity>

      <Modal visible={show} transparent animationType="none">
        <View style={styles.modal}>
          <SafeAreaView style={styles.content}>
            <View style={styles.dateTimePicker}>
              <DateTimePicker
                display="inline"
                testID="dateTimePicker"
                value={date}
                mode="date"
                onChange={onChangeValue}
                style={styles.picker}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnCancel} onPress={() => setShow(false)}>
              <Text style={styles.btntext}>Cancel</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};

export default MyIosDateTimePicker;

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
  btnCancel: {
    height: 48,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  content: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    gap: 16,
  },
  btntext: {
    fontSize: 24,
    color: '#1283ec',
  },
  dateTimePicker: {
    backgroundColor: '#fff',
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 16, 
  },
  picker:{
    height: 'auto',
    paddingBottom: 8
  }
});
