/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import MySelect from '../../../common/base/MySelect';
import MyTextInput from '../../../common/base/MyTextInput';
import ButonText from '../../../common/components/button/ButonText';
import useThemeContext from '../../../hooks/useThemeContext';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';
import {showNoti} from '../../../common/components/notify';

const options: ISelectOption[] = [
  {
    label: 'Column 1',
    value: '1',
  },
  {
    label: 'Column 2',
    value: '2',
  },
  {
    label: 'Column 3',
    value: '3',
  },
  {
    label: 'Column 4',
    value: '4',
  },
  {
    label: 'Column 5',
    value: '5',
  },
  {
    label: 'Column 6',
    value: '6',
  },
  {
    label: 'Column 7',
    value: '7',
  },
  {
    label: 'Column 8',
    value: '8',
  },
  {
    label: 'Column 9',
    value: '9',
  },
  {
    label: 'Column 10',
    value: '10',
  },
  {
    label: 'Column 11',
    value: '11',
  },
  {
    label: 'Column 12',
    value: '12',
  },
];

const PortfolioFilter = () => {
  const theme = useThemeContext();

  // const bottomSheetRef = React.useRef<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const btnTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  // const openBottomSheet = useCallback(() => {
  //   const isActive = bottomSheetRef.current?.isActive();
  //   if (isActive) {
  //     bottomSheetRef.current?.scrollTo(0);
  //   } else {
  //     bottomSheetRef.current?.scrollTo(-200);
  //   }
  // }, []);

  const onFApply = () => {
    showNoti('success', 'Apply success !', 'Filter has been applied');
    navigation.goBack();
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
          <View style={styles.wraped}>
            <Text style={titleStyle}>Column</Text>
            <MySelect
              options={options}
              onChange={vl => {
                console.log('--onChange--: ', vl);
              }}
            />
            <MyTextInput style={styles.input} />
          </View>
          <View style={styles.wraped}>
            <View style={styles.deviceRow}>
              <Text style={titleStyle}>Device Categorize:</Text>
              <TouchableOpacity style={styles.all} activeOpacity={0.5}>
                <Text style={btnTextStyle}>ALL</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.deviceRow}>
              <ButonText
                text="PV System Inverter"
                touchableOpacityStyles={styles.flex1}
              />
              <ButonText
                text="Production Meter"
                touchableOpacityStyles={styles.flex1}
              />
            </View>
            <View style={styles.deviceRow}>
              <ButonText
                text="Solar Tracker"
                touchableOpacityStyles={styles.flex1}
              />
              <ButonText
                text="Datalogger"
                touchableOpacityStyles={styles.flex1}
              />
            </View>
            <View style={styles.deviceRow}>
              <ButonText text="Sensor" touchableOpacityStyles={styles.flex1} />
              <ButonText
                text="Weather Station"
                touchableOpacityStyles={styles.flex1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <PrimaryFooter onOK={onFApply} />
    </>
  );
};

export default PortfolioFilter;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
    padding: 16,
    width: '100%',
    // backgroundColor: 'red',
  },
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
  deviceRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },

  all: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  input: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    borderRadius: 8,
    height: 37,
    width: '100%',
  },
  contentContainerStyle: {
    paddingBottom: 16,
  },
  flex1: {
    flex: 1,
  },
});
