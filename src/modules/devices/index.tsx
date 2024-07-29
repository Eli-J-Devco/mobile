/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyScrollView from '../../common/base/MyScrollView';
import MyTouchableOpacity from '../../common/base/MyTouchableOpacity';
import IconImage from '../../common/components/icons/IconImage';
import Tabs from '../../common/components/tab/Tabs';
import {devicesRouteNames} from '../../navigations/router-name';
import DevicesList from './components/DevicesList';
import Summary from './components/summary/Summary';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
