/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet, TextStyle, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import useThemeContext from '../../hooks/useThemeContext';

const TO_VALUE = 100

interface IMyProcessProps {
  percentage: number;
}

const MyProcess = ({percentage}: IMyProcessProps) => {
  const theme = useThemeContext();
  const processAnm = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    action().start();

    return () => action().reset();
  }, [percentage]);

  const action = () => {
    return Animated.timing(processAnm, {
      toValue: TO_VALUE,
      duration: 2000,
      useNativeDriver: false,
    });
  };

  const percentageTextStyle: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.s,
    fontWeight: '700',
  };

  return (
    <View style={styles.percentageWraped}>
      <Animated.View
        style={[
          styles.percentage,
          {
            width: processAnm.interpolate({
              inputRange: [0, TO_VALUE],
              outputRange: ['0%', `${percentage}%`],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <Text style={percentageTextStyle}>{percentage}%</Text>
      </Animated.View>
    </View>
  );
};

export default MyProcess;

const styles = StyleSheet.create({
  percentageWraped: {
    borderColor: '#7F7F7F',
    backgroundColor: '#fff',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
    height: 16
  },
  percentage: {
    borderColor: 'transparent',
    backgroundColor: '#25D922',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
