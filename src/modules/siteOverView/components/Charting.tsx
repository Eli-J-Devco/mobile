/* eslint-disable no-magic-numbers */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import MyDateRangePicker from '../../../common/base/MyDateRangePicker';
import MySelect from '../../../common/base/MySelect';
// import BarChartKit from '../../../common/components/chart/BarChartKit';
import SvgIcon from '../../../common/components/SvgIcon';
import H3 from '../../../common/components/text/H3';
import TimeAxis from '../../../common/components/times/TimeAxis';
import useThemeContext from '../../../hooks/useThemeContext';
// import RCTBarChart from '../../../nativeModules/RCTBarChart';
import RCTMosaicChart from '../../../nativeModules/RCTMosaicChart';

const Charting = () => {
  const theme = useThemeContext();

  const [data, setData] = useState([
    {x: 'Q2 2014', y: [17.982, 10.941, 9.835, 4.047, 2.841]},
    {x: 'Q3 2014', y: [17.574, 8.659, 6.23, 2.627, 2.242]},
    {x: 'Q1 2015', y: [19.75, 10.35, 6.292, 3.595, 2.136]},
    {x: 'Q2 2015', y: [30.6, 17.2, 16.1, 5.4, 5.2]},
    {x: 'Q3 2015', y: [21.316, 12.204, 16.823, 3.457, 4.21]},
    {x: 'Q4 2015', y: [20.209, 10.342, 13.23, 2.872, 2.959]},
    {x: 'Q1 2016', y: [21.773, 10.577, 12.518, 3.929, 2.704]},
    {x: 'Q2 2016', y: [21.773, 10.577, 12.518, 3.929, 2.704]},
  ]);

  // useEffect(() => {
  //   const updateData = () => {
  //     setData(prevData =>
  //       prevData.map(item => ({
  //         ...item,
  //         y: Math.floor(Math.random() * 100), // Tạo số ngẫu nhiên từ 0 đến 99
  //       })),
  //     );
  //   };

  //   // Cập nhật dữ liệu mỗi 1 giây
  //   const intervalId = setInterval(updateData, 1000);

  //   // Dọn dẹp khi component bị unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  // const [data, setData] = useState<number[]>([
  //   50, 70, 90, 30, 80, 60, 100, 20, 40, 60,
  // ]);
  // const labels: string[] = [
  //   '05/01',
  //   '05/02',
  //   '05/03',
  //   '05/04',
  //   '05/05',
  //   '05/06',
  //   '05/07',
  //   '05/08',
  //   '05/09',
  //   '05/10',
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const randomData = Array.from({length: 10}, () =>
  //       Math.floor(Math.random() * 100),
  //     );

  //     setData(randomData);
  //   }, 1000);

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

  const textStyles: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
  };
  const generationTextStyles: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };
  const generationDesTextStyles: TextStyle = {
    color: theme.palette.text.secondary,
    fontSize: theme.font.size.s,
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.flex}>
          <View style={styles.flex}>
            <Switch style={styles.swich} />
            <Text style={textStyles}>Day/Night</Text>
          </View>
          <View style={styles.flex}>
            <Switch style={styles.swich} />
            <Text style={textStyles}>Filter</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity activeOpacity={0.5} style={styles.flex}>
            <SvgIcon iconName="download" />
          </TouchableOpacity>
          <View style={styles.flex}>
            <MySelect containerStyle={styles.selectContainer} />
          </View>
        </View>
      </View>
      <TimeAxis />
      <View style={styles.generation}>
        <Text style={generationTextStyles}>Generation (0 kWh)</Text>
        <Text style={generationDesTextStyles}>
          Last updated on June 30, 2024 4:02 AM
        </Text>
        <View style={styles.chartContainer}>
          {/* <ChartBar /> */}

          {/* <BarChartKit /> */}
          {/* <RCTBarChart style={styles.chart} data={{values: data, labels}} /> */}
          <RCTMosaicChart
            style={styles.chart}
            data={data}
            title="Mosaic Chart Example"
          />
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.dot} />
        <H3>Energy Output</H3>
      </View>
      <View style={styles.date}>
        <View style={styles.datePicker}>
          <MyDateRangePicker />
        </View>
      </View>
    </View>
  );
};

export default Charting;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    shadowColor: '#F2F2F2',
    elevation: 12,
    borderColor: '#F2F2F2',
    borderWidth: 1,
    width: '100%',
    height: 'auto',
    gap: 16,
    flexDirection: 'column',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    gap: 4,
  },
  swich: {
    transform: [{scaleX: 0.5}, {scaleY: 0.5}],
    marginRight: -10,
  },
  generation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#a9a9a9',
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    gap: 8,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    height: 'auto',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  datePicker: {
    width: 200,
  },
  selectContainer: {
    width: 100,
    height: 30,
    borderRadius: 30,
  },
  chart: {
    width: 350,
    height: 300,
  },
});
