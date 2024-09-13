/* eslint-disable @typescript-eslint/no-explicit-any */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useRef, useState} from 'react';
import {
  Animated,
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

interface IMyIosDateRangePicker {
  value?: [any, any];
  placeholder?: string;
  onChange?: (value: any) => void;
  containerStyle?: ViewStyle;
}

const MyIosDateRangePicker = ({
  placeholder,
  containerStyle,
}: IMyIosDateRangePicker) => {
  const theme = useThemeContext();

  const translateX = useRef(new Animated.Value(0)).current;

  const [fromdate, setFromDate] = useState<any>(new Date());
  const [todate, setToDate] = useState<any>(new Date());
  const [formOpen, setFormOpen] = useState(false);
  const [isComplete, setIsComplate] = useState(false);
  const [show, setShow] = useState(false);
  const [dateTeam, setDateTeam] = useState<any>(new Date());

  const startSlide = () => {
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: 500,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: -500,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onChangeDateValue = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;

    setDateTeam(currentDate);
  };

  const onConfirm = () => {
    if (formOpen) {
      setFromDate(dateTeam);
      setFormOpen(false);
      startSlide();
      setIsComplate(true);
    } else {
      setToDate(dateTeam);
      onCancel();
    }
  };

  const onBack = () => {
    setFormOpen(true)
    setIsComplate(false)
  }

  const onCancel = () => {
    setShow(false);
    setFormOpen(true)
    setIsComplate(false)
  };

  const onOpen = () => {
    setFormOpen(true);
    setShow(true);
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
        onPress={onOpen}>
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

      <Modal visible={show} transparent animationType="none">
        <View style={styles.modal}>
          <SafeAreaView style={styles.content}>
            <View style={styles.dateTimePicker}>
              <View style={styles.titleContainer}>
                {isComplete && <TouchableOpacity style={styles.back} onPress={onBack}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>}
                <Text style={[styles.btntext, styles.title]}>
                  {!isComplete ? 'From Date' : 'To Date'}
                </Text>
              </View>
              <Animated.View style={{transform: [{translateX}]}}>
                <DateTimePicker
                  display="inline"
                  testID="dateTimePicker"
                  value={fromdate}
                  mode="date"
                  onChange={onChangeDateValue}
                  style={styles.picker}
                  minimumDate={formOpen ? null : fromdate}
                />
              </Animated.View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.btnCancel}
                onPress={onConfirm}>
                <Text style={styles.btntext}>
                  {isComplete ? 'Confirm' : 'Next'}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnCancel}
              onPress={onCancel}>
              <Text style={styles.btntext}>Cancel</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};

export default MyIosDateRangePicker;

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
  picker: {
    height: 'auto',
    paddingBottom: 8,
  },
  titleContainer: {
    display: 'flex', 
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }, 
  title: {

  },
  back: {
    position: 'absolute',
    top: 'auto', 
    left: 0
  },
  backText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400'
  }
});
