import React from 'react';
import {StyleSheet, View} from 'react-native';
import DevicesItem from './DevicesItem';

const DevicesList = () => {
  return (
    <View style={styles.container}>
      <DevicesItem />
      <DevicesItem />
      <DevicesItem />
    </View>
  );
};

export default DevicesList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    gap: 16,
  },
});
