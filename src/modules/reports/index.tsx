import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonIcon from '../../common/components/button/ButtonIcon';
import IconButton from '../../common/components/button/IconButton';
import ChartBar from '../../common/components/chart/ChartBar';
import TimeAxis from '../../common/components/times/TimeAxis';
import PrimaryCardItem from '../../common/components/view/PrimaryCardItem';
import {reportsRouteNames} from '../../navigations/router-name';
import BarChartKit from '../../common/components/chart/BarChartKit';
import H3 from '../../common/components/text/H3';
import MyDateRangePicker from '../../common/base/MyDateRangePicker';
import MySelect from '../../common/base/MySelect';

const Reports = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <PrimaryCardItem layout="column">
      <View style={[styles.action, styles.flex]}>
        <View style={[styles.flex, {gap: 8}]}>
          <IconButton size={20} iconName="download" />
          <IconButton
            size={20}
            iconName="setting"
            onPress={() => navigation.navigate(reportsRouteNames.ReportSetup)}
          />
        </View>
        <View style={[styles.flex, {gap: 8}]}>
          <ButtonIcon
            iconName="filter"
            text="Filter"
            touchableOpacityProps={{
              onPress: () =>
                navigation.navigate(reportsRouteNames.ReportFilter),
            }}
            touchableOpacityStyles={{
              backgroundColor: 'transparent',
            }}
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
      <BarChartKit />
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
          containerStyle={{
            width: 100,
            height: 25,
            borderRadius: 30,
          }}
        />
        <View style={styles.datePicker}>
          <MyDateRangePicker />
        </View>
      </View>
    </PrimaryCardItem>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
    marginTop: 16,
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
});
