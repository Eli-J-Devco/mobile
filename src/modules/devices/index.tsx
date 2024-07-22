/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyScrollView from '../../common/base/MyScrollView';
import Tabs from '../../common/components/tab/Tabs';
import DevicesList from './components/DevicesList';
import MyTouchableOpacity from '../../common/base/MyTouchableOpacity';
import SvgIcon from '../../common/components/SvgIcon';
import Summary from './components/summary/Summary';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {devicesRouteNames} from '../../navigations/router-name';
import IconImage from '../../common/components/icons/IconImage';

const items: ITab[] = [
  {
    key: '1',
    label: 'Devices',
    children: <DevicesList />,
  },
  {
    key: '2',
    label: 'Summary',
    children: <Summary />,
  },
];

const Devices = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <MyScrollView>
      <Tabs
        items={items}
        extra={
          <View style={styles.action}>
            <MyTouchableOpacity>
              <IconImage iconName="repeat" size={24} />
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={() =>
                navigation.navigate(devicesRouteNames.FilterColumns)
              }>
              <IconImage iconName="pause" size={24} />
            </MyTouchableOpacity>
          </View>
        }
      />
    </MyScrollView>
  );
};

export default Devices;

const styles = StyleSheet.create({
  container: {},
  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
