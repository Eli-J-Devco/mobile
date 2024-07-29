import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: '#F0DB2B',
  },
});
