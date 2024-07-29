import React from 'react';
import {StyleSheet, View} from 'react-native';
import SummaryItem from './SummaryItem';

const Summary = () => {
  return (
    <View style={styles.container}>
      <SummaryItem item={{Tilte: 'PV SYSTEM INVERTER'}} />
      <SummaryItem item={{Tilte: 'PRODUCTION METER'}} />
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
