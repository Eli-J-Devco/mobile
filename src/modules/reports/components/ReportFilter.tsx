/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyCheckBoxText from '../../../common/base/MyCheckBoxText';
import MyScrollView from '../../../common/base/MyScrollView';
import MyTree from '../../../common/base/MyTree';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';
import H2 from '../../../common/components/text/H2';

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

const ReportFilter = () => {
  return (
    <>
      <MyScrollView paddingHorizontal={0}>
        <View style={styles.container}>
          <View style={styles.wraped}>
            <H2>Components:</H2>
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
          <View style={styles.wraped}>
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
});
