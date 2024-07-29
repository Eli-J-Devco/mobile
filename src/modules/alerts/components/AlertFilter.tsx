/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, StyleSheet, Text, TextStyle, View} from 'react-native';
import MyTree from '../../../common/base/MyTree';
import ButonText from '../../../common/components/button/ButonText';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';
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

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
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
              onChecked={(x, y) => {
                console.log('----x----: ', x);
                console.log('----y----: ', y);
              }}
            />
          </View>
          <View style={styles.wraped}>
            <View style={styles.row}>
              <Text style={titleStyle}>Device Categorize:</Text>
              <ButonText
                text="ALL"
                touchableOpacityStyles={styles.touchableOpacityAll}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="COMM"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}
              />
              <ButonText
                text="ERROR"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}
              />
              <ButonText
                text="INFO"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="PRODUCTION"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}
              />
              <ButonText
                text="DEBUG"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}
              />
              <ButonText
                text="FATAL"
                touchableOpacityStyles={styles.touchableOpacityStyles}
                textSize={theme.font.size.s}
              />
            </View>
          </View>
          <View style={styles.wraped}>
            <View style={styles.row}>
              <Text style={titleStyle}>Error Type:</Text>
              <ButonText
                text="ALL"
                touchableOpacityStyles={styles.touchableOpacityAll}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="System Disconnect"
                touchableOpacityStyles={styles.errTypeBtn}
              />
              <ButonText
                text="String Performance"
                touchableOpacityStyles={styles.errTypeBtn}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Performance Index"
                touchableOpacityStyles={styles.errTypeBtn}
              />
              <ButonText
                text="Zero Generation"
                touchableOpacityStyles={styles.errTypeBtn}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Device Fault"
                touchableOpacityStyles={styles.errTypeBtn}
              />
            </View>
          </View>
          <View style={styles.wraped}>
            <View style={styles.row}>
              <Text style={titleStyle}>Device Categorize:</Text>
              <ButonText
                text="ALL"
                touchableOpacityStyles={styles.touchableOpacityAll}
              />
            </View>
            <View style={styles.row}>
              <ButonText
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
              />
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
