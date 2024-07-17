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
import Grid from '../../../common/components/view/Grid';
import MyCheckBoxText from '../../../common/base/MyCheckBoxText';
import MyScrollView from '../../../common/base/MyScrollView';
import H3 from '../../../common/components/text/H3';
import H2 from '../../../common/components/text/H2';

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

const ReportFilter = () => {
  const theme = useThemeContext();

  return (
    <>
      <MyScrollView paddingHorizontal={0}>
        <View style={[styles.container]}>
          <View style={[styles.wraped]}>
            <H2>Components:</H2>
            <MyTree
              data={treeData}
              onChecked={(x, y) => {
                console.log('----x----: ', x);
                console.log('----y----: ', y);
              }}
            />
          </View>
          <View style={[styles.wraped]}>
            <View style={styles.row}>
              <H2>Measurements:</H2>
            </View>

            <MyCheckBoxText span={1}>All</MyCheckBoxText>
            <MyCheckBoxText span={1}>AC Current</MyCheckBoxText>
            <MyCheckBoxText span={1}>AC Voltage</MyCheckBoxText>
            <MyCheckBoxText span={1}>Energy</MyCheckBoxText>
            <MyCheckBoxText span={1}>Energy (cumulative)</MyCheckBoxText>
            <MyCheckBoxText span={1}>Faults</MyCheckBoxText>
            <MyCheckBoxText span={1}>Phase Angle</MyCheckBoxText>
            <MyCheckBoxText span={1}>Power</MyCheckBoxText>
          </View>
          <View style={[styles.wraped]}>
            <H2>Hardware Registers:</H2>
            <MyTree
              data={treeData}
              onChecked={(x, y) => {
                console.log('----x----: ', x);
                console.log('----y----: ', y);
              }}
            />
          </View>
        </View>
      </MyScrollView>
      <PrimaryFooter />
    </>
  );
};

export default ReportFilter;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
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
});
