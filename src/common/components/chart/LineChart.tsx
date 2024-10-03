/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import RCTALineChart from '../../../nativeModules/android/RCTLineChart';
import RCTILineChart from '../../../nativeModules/ios/LineChart';

const {width} = Dimensions.get('window');

const LineChart = () => {
  const [data, setData] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ]);

  useEffect(() => {
    const setStateInterval = setInterval(() => {
      const team = [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ];

      setData(team);
    }, 1000);

    return () => {
      clearInterval(setStateInterval);
    };
  }, []);

  return (
    <>
      {Platform.OS === 'ios' ? (
        <RCTILineChart
          chartData={{
            labels: ['05/01', '05/01', '05/01', '05/01', '05/01', '05/01'],
            values: data,
          }}
          style={styles.chart}
        />
      ) : (
        <RCTALineChart
          data={{
            labels: ['05/01', '05/01', '05/01', '05/01', '05/01', '05/01'],
            values: data,
          }}
          style={styles.chart}
        />
      )}
    </>
  );
};

export default LineChart;

const styles = StyleSheet.create({
  chart: {
    width: width * 0.9,
    height: 250,
    marginBottom: 16
  },
});
