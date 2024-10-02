/* eslint-disable no-magic-numbers */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import MyDateRangePicker from '../../common/base/MyDateRangePicker';
import MySelect from '../../common/base/MySelect';
import ButtonIcon from '../../common/components/button/ButtonIcon';
import IconButton from '../../common/components/button/IconButton';
// import BarChartKit from '../../common/components/chart/BarChartKit';
import H3 from '../../common/components/text/H3';
import DateRangePicker from '../../common/components/times/DateRangePicker';
import TimeAxis from '../../common/components/times/TimeAxis';
import PrimaryCardItem from '../../common/components/view/PrimaryCardItem';
import {reportsRouteNames} from '../../navigations/router-name';

const Reports = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // const [data, setData] = useState<Value[]>([
  //   {x: 'Category A', y: 10},
  //   {x: 'Category B', y: 20},
  //   {x: 'Category C', y: 30},
  // ]);

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

  const gap: ViewStyle = {gap: 8};

  return (
    <PrimaryCardItem layout="column">
      <View style={[styles.action, styles.flex]}>
        <View style={[styles.flex, gap]}>
          <IconButton size={20} iconName="download" />
          <IconButton
            size={20}
            iconName="setting"
            onPress={() => navigation.navigate(reportsRouteNames.ReportSetup)}
          />
        </View>
        <View style={[styles.flex, gap]}>
          <ButtonIcon
            iconName="filter"
            text="Filter"
            touchableOpacityProps={{
              onPress: () =>
                navigation.navigate(reportsRouteNames.ReportFilter),
            }}
            touchableOpacityStyles={styles.touchableOpacityStyles}
          />
          <IconButton
            iconName="more"
            size={24}
            onPress={() =>
              navigation.navigate(reportsRouteNames.AdditionalData)
            }
          />
        </View>
      </View>
      <View style={styles.timeAxis}>
        <TimeAxis />
      </View>
      {/* <BarChartKit /> */}
      {/* <RCTMutiLineChart style={styles.chart} data={data} /> */}
      {/* <RCTBarChart style={styles.chart} data={{values: data, labels}} /> */}
      {/* <RCTMosaicChart
        style={styles.chart}
        data={data}
        title="Mosaic Chart Example"
      /> */}
      <View style={styles.description}>
        <View style={styles.dot} />
        <H3>Energy Output</H3>
      </View>
      <View style={styles.date}>
        <MySelect
          value={'3day'}
          options={[
            {
              label: '3 Days',
              value: '3day',
            },
            {
              label: 'Week',
              value: 'week',
            },
            {
              label: 'Month',
              value: 'month',
            },
            {
              label: 'Year',
              value: 'year',
            },
          ]}
          containerStyle={styles.selectContainerStyle}
        />
        <View style={styles.datePicker}>
          <DateRangePicker />
        </View>
      </View>
    </PrimaryCardItem>
  );
};

export default Reports;

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginTop: 8,
    // backgroundColor: 'red',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  datePicker: {
    width: 200,
  },
  timeAxis: {
    marginBottom: 16,
  },
  selectContainerStyle: {
    width: 100,
    height: 25,
    borderRadius: 30,
  },
  touchableOpacityStyles: {
    backgroundColor: 'transparent',
  },
  chart: {
    width: width * 0.9,
    height: 300,
  },
});
