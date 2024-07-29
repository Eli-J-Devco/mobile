/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
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
import BarChartKit from '../../../common/components/chart/BarChartKit';
import SvgIcon from '../../../common/components/SvgIcon';
import H3 from '../../../common/components/text/H3';
import TimeAxis from '../../../common/components/times/TimeAxis';
import useThemeContext from '../../../hooks/useThemeContext';

const Charting = () => {
  const theme = useThemeContext();

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

          <BarChartKit />
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
});
