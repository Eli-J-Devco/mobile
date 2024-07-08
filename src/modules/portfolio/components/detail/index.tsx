/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import SvgIcon from '../../../../common/components/SvgIcon';
import useThemeContext from '../../../../hooks/useThemeContext';
import DetailItem from './DetailItem';
import SiteInformation from './SiteInformation';

const DATA: IDetailItem[] = [
  {
    id: 1,
    name: 'EER This Month',
    percentage: 80,
    despription: 'Energy Ratio (EER): Ratio of Actual to Expected Energy',
  },
  {
    id: 2,
    name: 'EER Last Month',
    percentage: 80,
    despription:
      'Expected Energy Ratio (EER): Ratio of Actual to Expected Energy',
  },
  {
    id: 3,
    name: 'Performance Index Yesterday',
    percentage: 60,
    // despription: 'Energy Ratio (EER): Ratio of Actual to Expected Energy',
  },
  {
    id: 4,
    name: 'Performance Index Now',
    percentage: 80,
    // despription: 'Energy Ratio (EER): Ratio of Actual to Expected Energy',
  },
];

const PortfolioDetails = () => {
  const theme = useThemeContext();

  const todayLable: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };
  const todayValue: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.md,
    fontWeight: '700',
  };

  const summaryLable: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };
  const summaryValue: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  return (
    <View>
      <View style={styles.overViewContainer}>
        <View
          style={[
            styles.todayWrapper,
            {
              borderColor: theme.palette.appThemeColor.colors.blue[300],
            },
          ]}>
          <View
            style={[
              styles.today,
              {
                backgroundColor: theme.palette.appThemeColor.colors.blue[400],
              },
            ]}>
            <Text style={todayLable}>Today</Text>
            <Text style={todayValue}>13.5</Text>
            <Text style={todayLable}>kWh</Text>
          </View>
        </View>
        <View style={styles.summary}>
          <View style={styles.summaryItem}>
            <View
              style={[
                styles.summaryIcon,
                {borderColor: theme.palette.appThemeColor.colors.blue[300]},
              ]}>
              <SvgIcon iconName="solarPanels" />
            </View>
            <View style={styles.summaryText}>
              <Text style={summaryLable}>This month (kWh)</Text>
              <Text style={summaryValue}>569.5</Text>
            </View>
          </View>
          <View style={styles.summaryItem}>
            <View
              style={[
                styles.summaryIcon,
                {borderColor: theme.palette.appThemeColor.colors.blue[300]},
              ]}>
              <SvgIcon iconName="irradiance" />
            </View>
            <View style={styles.summaryText}>
              <Text style={summaryLable}>Irradiance W/m2</Text>
              <Text style={summaryValue}>569.5</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.currentPower}>
        <View
          style={[
            styles.currentPowerIcon,
            {borderColor: theme.palette.appThemeColor.colors.blue[300]},
          ]}>
          <SvgIcon iconName="electricityBlue" />
        </View>
        <Text style={summaryLable}>
          Current Power{' '}
          <Text
            style={[
              summaryValue,
              {
                fontSize: theme.font.size.sm,
              },
            ]}>
            589
          </Text>{' '}
          kW
        </Text>
      </View>
      <View style={styles.itemList}>
        {DATA.map((item: IDetailItem) => (
          <DetailItem key={item.id} item={item} />
        ))}
        <SiteInformation />
      </View>
    </View>
  );
};

export default PortfolioDetails;

const styles = StyleSheet.create({
  overViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todayWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 100,
    width: 140,
    height: 140,
  },
  today: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
    borderRadius: 100,
    width: 115,
    height: 115,
  },
  summary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 16,
    alignItems: 'center',
  },
  summaryItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  summaryIcon: {
    width: 44,
    height: 44,
    borderRadius: 44,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  currentPower: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 32,
  },
  currentPowerIcon: {
    width: 44,
    height: 44,
    borderRadius: 44,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 8,
  },
});
