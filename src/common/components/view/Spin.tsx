/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const Spin = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.circleOuter}>
        {Array.from({length: 5}).map((_, index) => (
          <View key={index} style={styles.segment} />
        ))}
      </Animated.View>
      <Animated.View style={styles.circleInner} />
      <Animated.Image
        source={require('../../../assets/image/logo1.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Spin;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 80,
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleOuter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // borderColor: '#333',
    // borderWidth: 2,
    // borderRadius: 40,
    // borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 40,
  },
  logo: {
    width: 48,
    height: 48,
  },
  segment: {
    width: 10, // Độ dày của đoạn
    height: 30, // Chiều dài của mỗi đoạn
    backgroundColor: 'rgba(0, 0, 255, 0.5)', // Màu của đoạn
    borderRadius: 5, // Làm cong đầu đoạn
    position: 'absolute',
    top: 0,
    transform: [{rotate: '0deg'}], // Sẽ được xoay sau
  },
});
