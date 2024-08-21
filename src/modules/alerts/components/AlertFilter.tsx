/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, StyleSheet, Text, TextStyle, View} from 'react-native';
import MyTree from '../../../common/base/MyTree';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';
import useThemeContext from '../../../hooks/useThemeContext';
import DeviceCategorize from './alertFilter/DeviceCategorize';
import DevicesCategory from './alertFilter/DevicesCategory';
import ErrorType from './alertFilter/ErrorType';
import {useNavigation} from '../../../hooks/useNavigation';
import {showNoti} from '../../../common/components/notify';

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
  const navigation = useNavigation();

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const onApply = () => {
    showNoti('success', 'Alert Filter', 'Alert filter has been updated');
    navigation.goBack();
  };

  const onCancel = () => {
    navigation.goBack();
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
          <DevicesCategory />
          <ErrorType />
          <DeviceCategorize />
        </View>
      </ScrollView>
      <PrimaryFooter onOK={onApply} onCancel={onCancel} />
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
  srcollViewContentContainerStyle: {
    paddingBottom: 16,
  },
});
