/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import MyCheckBoxText from '../../../common/base/MyCheckBoxText';
import InputLabel from '../../../common/components/input/InputLabel';
import SelectLabel from '../../../common/components/select/SelectLabel';
import useThemeContext from '../../../hooks/useThemeContext';
import {globalStyles} from '../../../styles';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';

const AlertConfig = () => {
  const theme = useThemeContext();

  const [cc, setCC] = useState('');

  const labelStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <View
          style={[
            globalStyles.view,
            styles.container,
            {backgroundColor: theme.palette.background.primary, marginTop: 16},
          ]}>
          <Text style={labelStyle}>Alert Config</Text>
          <SelectLabel label="Start time (Hour)" />
          <SelectLabel value={cc} label="End time (Hour)" />
          <SelectLabel label="Alert Trigger Threshold" />
        </View>
        <View
          style={[
            globalStyles.view,
            styles.container,
            {backgroundColor: theme.palette.background.primary, marginTop: 16},
          ]}>
          <Text style={labelStyle}>Email Subscribers</Text>
          <InputLabel label="To" />
          <InputLabel value={cc} onChange={vl => setCC(vl)} label="CC" />
          <InputLabel label="BCC" />
        </View>
        <View
          style={[
            globalStyles.view,
            styles.container,
            {backgroundColor: theme.palette.background.primary, marginTop: 16},
          ]}>
          <Text style={labelStyle}>Alert Type</Text>

          <MyCheckBoxText>All</MyCheckBoxText>
          <View style={styles.alertType}>
            <View style={styles.col1}>
              <MyCheckBoxText>COMM</MyCheckBoxText>
            </View>
            <View style={styles.col1}>
              <MyCheckBoxText>DEBUG</MyCheckBoxText>
            </View>
          </View>
          <View style={styles.alertType}>
            <View style={styles.col1}>
              <MyCheckBoxText>FATAL</MyCheckBoxText>
            </View>
            <View style={styles.col1}>
              <MyCheckBoxText>PRODUCTION</MyCheckBoxText>
            </View>
          </View>
          <View style={styles.alertType}>
            <View style={styles.col1}>
              <MyCheckBoxText>WARNING</MyCheckBoxText>
            </View>
            <View style={styles.col1}>
              <MyCheckBoxText>INFO</MyCheckBoxText>
            </View>
          </View>
        </View>
        <View
          style={[
            globalStyles.view,
            styles.container,
            {backgroundColor: theme.palette.background.primary, marginTop: 16},
          ]}>
          <Text style={labelStyle}>Devices</Text>
          <MyCheckBoxText>All</MyCheckBoxText>
          <MyCheckBoxText>Datalogger</MyCheckBoxText>
          <MyCheckBoxText> Series 4000 - Warehouse Left</MyCheckBoxText>
          <MyCheckBoxText>Series 4000 - Warehouse Right</MyCheckBoxText>
        </View>
      </ScrollView>
      <PrimaryFooter cancleText="Reset to default" />
    </>
  );
};

export default AlertConfig;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  alertType: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  col1: {
    flex: 1,
  },
});
