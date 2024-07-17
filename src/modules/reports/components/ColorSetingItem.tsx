import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ColorSetingItem = () => {
  return (
    <View style={styles.container}>
      <Text>PVI-50TL INV01</Text>
      <View style={styles.value}></View>
    </View>
  );
};

export default ColorSetingItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 8,
  },
  value: {
    width: 50,
    height: 18,
    borderRadius: 4,
    backgroundColor: '#0094FF',
  },
});
