/* eslint-disable no-magic-numbers */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextStyle} from 'react-native';
import MyScrollView from '../../../../common/base/MyScrollView';
import MySwicthText from '../../../../common/base/MySwicthText';
import LineChartKit from '../../../../common/components/chart/LineChartKit';
import PrimaryFooter from '../../../../common/components/footer/PrimaryFooter';
import InputLabel from '../../../../common/components/input/InputLabel';
import { showNoti } from '../../../../common/components/notify';
import SelectLabel from '../../../../common/components/select/SelectLabel';
import Card from '../../../../common/components/view/Card';
import Grid from '../../../../common/components/view/Grid';
import Item from '../../../../common/components/view/Item';
import { useNavigation } from '../../../../hooks/useNavigation';
import useThemeContext from '../../../../hooks/useThemeContext';
import {useNavigation} from '../../../../hooks/useNavigation';
import {showNoti} from '../../../../common/components/notify';
import RCTLineChart from '../../../../nativeModules/RCTLineChart';

const AlertDetail = () => {
  const theme = useThemeContext();
  const navigation = useNavigation();

  const [data, setData] = useState<number[]>([
    50, 70, 90, 30, 80, 60, 100, 20, 0, -60,
  ]);
  const labels: string[] = [
    '05/01',
    '05/02',
    '05/03',
    '05/04',
    '05/05',
    '05/06',
    '05/07',
    '05/08',
    '05/09',
    '05/10',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomData = Array.from({length: 10}, () =>
        Math.abs(Math.floor(Math.random() * 100)),
      );

      // console.log('randomData', randomData);

      setData(randomData);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const lableStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '600',
  };

  const onApply = () => {
    showNoti('success', 'Alert', 'Save successfully');
    navigation.goBack();
  };

  const onCancel = () => {
    navigation.goBack();
  };

  return (
    <>
      <MyScrollView>
        <View style={styles.container}>
          <Card tiltle="Component: Elkor WattsOn Mk. II">
          <Card tiltle="Component: Elkor WattsOn Mk. II">
            <View style={styles.infoContainer}>
              <Item lable="Opened" value="06/20/2024 10:00 AM" />
              <Item lable="Alert ID" value="124323112" mode="dark" />
              <Item lable="Last Comm" value="06/20/2024 10:00 AM" />
              <Item
                lable="Issue"
                value="Device has lost communication"
                mode="dark"
              />
              <Item lable="Description" />
            </View>
          </Card>
          <Card tiltle="Charting">
            <View style={styles.chart}>
              {/* <LineChartKit /> */}
              <RCTLineChart
                style={styles.chartLine}
                data={{values: data, labels}}
              />
              <View style={styles.descriptionContent}>
                <View style={styles.iconContainer}>
                  <View style={styles.dot} />
                  <View style={styles.line} />
                </View>
                <Text style={lableStyle}>Elkor WattsOn Mk. II</Text>
              </View>
            </View>
          </Card>
          <Card tiltle="Update">
            <View style={styles.update}>
              <Grid>
                <SelectLabel span={1} label="Error Level" placeholder="- - -" />
                <SelectLabel span={1} label="Status" placeholder="- - -" />
              </Grid>
              <InputLabel
                multiline
                label="Notes"
                containerStyle={styles.inputLableContainer}
              />
              {/* <PrimaryTextArea /> */}
              <Grid gap={16}>
                <MySwicthText span={1} textStyle={styles.fontSize}>
                  Alert acknowledged
                </MySwicthText>
                <MySwicthText textStyle={styles.fontSize} span={1}>
                  Disable notification
                </MySwicthText>
              </Grid>
              <MySwicthText textStyle={styles.fontSize}>Resolved</MySwicthText>
            </View>
          </Card>
        </View>
      </MyScrollView>
      <PrimaryFooter
        cancleText="Cancel"
        okText="Save"
        onCancel={onCancel}
        onOK={onApply}
      />
    </>
  );
};

export default AlertDetail;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  infoContainer: {
    padding: 8,
    flexDirection: 'column',
  },
  chart: {
    padding: 8,
  },
  update: {
    padding: 8,
    flexDirection: 'column',
    gap: 16,
  },
  fontSize: {
    fontSize: 12,
  },
  inputLableContainer: {
    minHeight: 100,
  },
  descriptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  line: {
    height: 1.5,
    width: 20,
    backgroundColor: 'rgba(0, 148, 255, 100)',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: 'rgba(0, 148, 255, 100)',
    borderRadius: 5,
    position: 'absolute',
    top: -4.5,
    left: 5,
  },
  chartLine: {
    width: 350,
    height: 210,
    marginBottom: 16,
  },
});
