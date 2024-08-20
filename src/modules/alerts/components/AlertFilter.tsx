/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextStyle, View} from 'react-native';
import MyTree from '../../../common/base/MyTree';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';
import RadioButton from '../../../common/components/selection-controls/RadioButton';
import useThemeContext from '../../../hooks/useThemeContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const treeData: any = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 4,
    name: 'Leviton',
    children: [
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'NW',
    children: [
      {
        id: 10,
        name: 'ACRA Investments, Inc.',
      },
      {
        id: 11,
        name: 'ACRA Investments, Inc.',
      },
      {
        id: 14,
        name: 'ACRA Investments, Inc.',
      },
    ],
  },
];

const AlertFilter = () => {
  const theme = useThemeContext();
  const [devicsCategoryAll, setDevicesCategoryAll] = useState<boolean>(false);
  const [devicsCategory, setDevicesCategory] = useState<string[]>(['COMM']);

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const handleDevicsCategoryAll = (value: string, isChecked: boolean) => {
    setDevicesCategoryAll(isChecked);
  };

  const handleDevicsCategoryChange = (value: string, isChecked: boolean) => {
    if (!isChecked) {
      setDevicesCategoryAll(isChecked);
      setDevicesCategory(devicsCategory.filter(x => x !== value));
    } else {
      setDevicesCategory(prev => [...prev, value]);
    }
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.srcollViewContentContainerStyle}>
        <View style={styles.container}>
          <View style={styles.wraped}>
            <Text style={titleStyle}>Site Name:</Text>
            <MyTree
              data={treeData}
              // onChecked={(x, y) => {
              //   console.log('----x----: ', x);
              //   console.log('----y----: ', y);
              // }}
            />
          </View>
          <View style={styles.wraped}>
            <View style={styles.row}>
              <Text style={titleStyle}>Device Categorize:</Text>
              <RadioButton
                checked={devicsCategoryAll || devicsCategory.includes('ALL')}
                value="ALL"
                touchableOpacityStyles={styles.touchableOpacityAll}
                onChange={handleDevicsCategoryAll}>
                ALL
              </RadioButton>
            </View>

            <View style={styles.row}>
              <RadioButton
                checked={devicsCategoryAll || devicsCategory.includes('COMM')}
                onChange={handleDevicsCategoryChange}
                value="COMM"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}>
                COMM
              </RadioButton>
              <RadioButton
                onChange={handleDevicsCategoryChange}
                checked={devicsCategoryAll || devicsCategory.includes('ERROR')}
                value="ERROR"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}>
                ERROR
              </RadioButton>
              <RadioButton
                onChange={handleDevicsCategoryChange}
                value="INFO"
                checked={devicsCategoryAll || devicsCategory.includes('INFO')}
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}>
                INFO
              </RadioButton>
            </View>
            <View style={styles.row}>
              <RadioButton
                onChange={handleDevicsCategoryChange}
                value="PRODUCTION"
                checked={
                  devicsCategoryAll || devicsCategory.includes('PRODUCTION')
                }
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}>
                PRODUCTION
              </RadioButton>
              <RadioButton
                onChange={handleDevicsCategoryChange}
                value="DEBUG"
                checked={devicsCategoryAll || devicsCategory.includes('DEBUG')}
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}>
                DEBUG
              </RadioButton>
              <RadioButton
                onChange={handleDevicsCategoryChange}
                value="FATAL"
                checked={devicsCategoryAll || devicsCategory.includes('FATAL')}
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}>
                FATAL
              </RadioButton>
            </View>
          </View>
          <View style={styles.wraped}>
            <View style={styles.row}>
              <Text style={titleStyle}>Error Type:</Text>
              <RadioButton
                value="ALL"
                touchableOpacityStyles={styles.touchableOpacityAll}>
                ALL
              </RadioButton>
            </View>
            <View style={styles.row}>
              <RadioButton
                value="SystemDisconnect"
                touchableOpacityStyles={styles.errTypeBtn}>
                System Disconnect
              </RadioButton>
              <RadioButton
                value="StringPerformance"
                touchableOpacityStyles={styles.errTypeBtn}>
                String Performance
              </RadioButton>
            </View>
            <View style={styles.row}>
              <RadioButton
                value="PerformanceIndex"
                touchableOpacityStyles={styles.errTypeBtn}>
                Performance Index
              </RadioButton>
              <RadioButton
                value="ZeroGeneration"
                touchableOpacityStyles={styles.errTypeBtn}>
                Zero Generation
              </RadioButton>
            </View>
            <View style={styles.row}>
              <RadioButton
                value="Device Fault"
                touchableOpacityStyles={styles.errTypeBtn}>
                Device Fault
              </RadioButton>
              <View style={styles.errTypeBtn} />
            </View>
          </View>
          <View style={styles.wraped}>
            <View style={styles.row}>
              <Text style={titleStyle}>Device Categorize:</Text>
              {/* <ButonText
                text="ALL"
                touchableOpacityStyles={styles.touchableOpacityAll}
              /> */}
              <RadioButton
                value="ALL"
                touchableOpacityStyles={styles.touchableOpacityAll}>
                ALL
              </RadioButton>
            </View>
            <View style={styles.row}>
              <RadioButton
                value="PVSystemInverter"
                touchableOpacityStyles={styles.errTypeBtn}>
                PV System Inverter
              </RadioButton>
              <RadioButton
                value="ProductionMeter"
                touchableOpacityStyles={styles.errTypeBtn}>
                Production Meter
              </RadioButton>
            </View>
            <View style={styles.row}>
              <RadioButton
                value="SolarTracker"
                touchableOpacityStyles={styles.errTypeBtn}>
                Solar Tracker
              </RadioButton>
              <RadioButton
                value="Datalogger"
                touchableOpacityStyles={styles.errTypeBtn}>
                Datalogger
              </RadioButton>
            </View>
            <View style={styles.row}>
              <RadioButton
                value="Sensor"
                touchableOpacityStyles={styles.errTypeBtn}>
                Sensor
              </RadioButton>
              <RadioButton
                value="WeatherStation"
                touchableOpacityStyles={styles.errTypeBtn}>
                Weather Station
              </RadioButton>
              {/* <ButonText
                text="PV System Inverter"
                touchableOpacityStyles={styles.errTypeBtn}
              />
              <ButonText
                text="Production Meter"
                touchableOpacityStyles={styles.errTypeBtn}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Solar Tracker"
                touchableOpacityStyles={styles.errTypeBtn}
              />
              <ButonText
                text="Datalogger"
                touchableOpacityStyles={styles.errTypeBtn}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Sensor"
                touchableOpacityStyles={styles.errTypeBtn}
              />
              <ButonText
                text="Weather Station"
                touchableOpacityStyles={styles.errTypeBtn}
              /> */}
            </View>
          </View>
        </View>
      </ScrollView>
      <PrimaryFooter />
    </>
  );
};

export default AlertFilter;

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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },
  srcollViewContentContainerStyle: {
    paddingBottom: 16,
  },
  touchableOpacityAll: {
    borderRadius: 20,
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  touchableOpacityStyles: {
    flex: 1,
    borderRadius: 20,
  },
  errTypeBtn: {
    flex: 1,
  },
});
