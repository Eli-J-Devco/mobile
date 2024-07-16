/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Switch,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import MySelect from '../../../common/base/MySelect';
import ButonText from '../../../common/components/button/ButonText';
import ChartBar from '../../../common/components/chart/ChartBar';
import SvgIcon from '../../../common/components/SvgIcon';
import useThemeContext from '../../../hooks/useThemeContext';

const Charting = () => {
  const theme = useThemeContext();

  const [data, setData] = useState([
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ]);

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
            <MySelect
              containerStyle={{
                width: 100,
                height: 30,
                borderRadius: 30,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.timeContainer,
          {backgroundColor: theme.palette.background.disable},
        ]}>
        <ButonText
          text="1 Minute"
          touchableOpacityStyles={{
            backgroundColor: 'trasparent',
            borderRadius: 0,
            borderRightColor: theme.palette.text.secondary,
            borderRightWidth: 0.5,
            padding: 0,
            paddingHorizontal: 4,
          }}
          textStyles={textStyles}
        />
        <ButonText
          text="5 Minute"
          touchableOpacityStyles={{
            backgroundColor: 'trasparent',
            borderRadius: 0,
            borderRightColor: theme.palette.text.secondary,
            borderRightWidth: 0.5,
            padding: 0,
            paddingHorizontal: 4,
          }}
          textStyles={textStyles}
        />
        <ButonText
          text="1 Hour"
          touchableOpacityStyles={{
            backgroundColor: 'trasparent',
            borderRadius: 0,
            borderRightColor: theme.palette.text.secondary,
            borderRightWidth: 0.5,
            padding: 0,
            paddingHorizontal: 4,
          }}
          textStyles={textStyles}
        />
        <ButonText
          text="1 Day"
          touchableOpacityStyles={{
            backgroundColor: 'trasparent',
            borderRadius: 0,
            borderRightColor: theme.palette.text.secondary,
            borderRightWidth: 0.5,
            padding: 0,
            paddingHorizontal: 4,
          }}
          textStyles={textStyles}
        />
        <ButonText
          text="7 Day"
          touchableOpacityStyles={{
            backgroundColor: 'trasparent',
            borderRadius: 0,
            borderRightColor: theme.palette.text.secondary,
            borderRightWidth: 0.5,
            padding: 0,
            paddingHorizontal: 4,
          }}
          textStyles={textStyles}
        />
        <ButonText
          text="1 Month"
          touchableOpacityStyles={{
            backgroundColor: 'trasparent',
            borderRadius: 0,
            borderRightColor: theme.palette.text.secondary,
            borderRightWidth: 0.5,
            padding: 0,
            paddingHorizontal: 4,
          }}
          textStyles={textStyles}
        />
        <ButonText
          text="1 Year"
          touchableOpacityStyles={{
            backgroundColor: 'trasparent',
            borderRadius: 0,
            padding: 0,
            paddingHorizontal: 4,
          }}
          textStyles={textStyles}
        />
      </View>
      <View style={styles.generation}>
        <Text style={generationTextStyles}>Generation (0 kWh)</Text>
        <Text style={generationDesTextStyles}>
          Last updated on June 30, 2024 4:02 AM
        </Text>
        <View style={styles.chartContainer}>
          <ChartBar />
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
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    borderRadius: 30,
    padding: 4,
    justifyContent: 'space-between',
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
});
