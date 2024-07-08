/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
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
import useThemeContext from '../../../hooks/useThemeContext';
import ButonText from '../../../common/components/button/ButonText';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '../../../common/components/BottomSheet';

const PortfolioFilter = () => {
  const theme = useThemeContext();

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

  const bottomSheetRef = React.useRef<any>(null);

  const openBottomSheet = useCallback(() => {
    const isActive = bottomSheetRef.current?.isActive();
    if (isActive) {
      bottomSheetRef.current?.scrollTo(0);
    } else {
      bottomSheetRef.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheet ref={bottomSheetRef}>
        <View></View>
      </BottomSheet>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <View style={[styles.container]}>
          <View style={styles.wraped}>
            <Text style={titleStyle}>Column</Text>
            <MySelect />
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
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="Production Meter"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
            <View style={styles.deviceRow}>
              <ButonText
                text="Solar Tracker"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="Datalogger"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
            <View style={styles.deviceRow}>
              <ButonText
                text="Sensor"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="Weather Station"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.actionWraped}>
        <TouchableOpacity style={styles.btnReset} activeOpacity={0.5}>
          <Text style={btnTextStyle}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openBottomSheet}
          style={styles.btnApply}
          activeOpacity={0.5}>
          <Text style={btnTextStyle}>Apply</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
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
  deviceItem: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  actionWraped: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DCDCDC',
    // position: 'absolute',
    // bottom: 0,
  },
  btnReset: {
    flex: 5,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8B8B8',
    borderRadius: 8,
  },
  btnApply: {
    flex: 5,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEDA00',
    borderRadius: 8,
  },
});
