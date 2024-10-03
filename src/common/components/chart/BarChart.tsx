/* eslint-disable no-magic-numbers */
import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import RCTIBarChart from '../../../nativeModules/ios/BarChart';
import RCTABarChart from '../../../nativeModules/android/RCTABarChart';

const {width} = Dimensions.get('window');

const BarChart = () => {
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
      {Platform.OS === 'android' ? (
        <RCTABarChart
          style={style.chart}
          data={{
            labels: ['05/01', '05/01', '05/01', '05/01', '05/01', '05/01'],
            values: data,
          }}
        />
      ) : (
        <RCTIBarChart
          chartData={{
            labels: ['05/01', '05/01', '05/01', '05/01', '05/01', '05/01'],
            values: data,
          }}
          style={style.chart}
        />
      )}
    </>
  );
};

export default BarChart

const style = StyleSheet.create({
  chart: {
    width: width * 0.9,
    height: 250,
  },
});
