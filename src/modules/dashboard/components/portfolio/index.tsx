/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../../../common/components/SvgIcon';
import useThemeContext from '../../../../hooks/useThemeContext';
import PortfolioItem from './PortfolioItem';
import IconImage from '../../../../common/components/icons/IconImage';
import MyTouchableOpacity from '../../../../common/base/MyTouchableOpacity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {dashboardRouteNames} from '../../../../navigations/router-name';

const PortfolioData: IDashboardPortfolio[] = [
  {
    id: 1,
    name: 'Costco - La Mesa (#469)',
    percentage: 30,
    children: [
      {
        title: 'Actual',
        value: 506.9,
      },
      {
        title: 'Expected',
        value: 600.3,
      },
    ],
  },
  {
    id: 2,
    name: 'Costco - La Mesa (#469)',
    percentage: 40,
    children: [
      {
        title: 'Actual',
        value: 506.9,
      },
      {
        title: 'Expected',
        value: 600.3,
      },
    ],
  },
  {
    id: 3,
    name: 'Costco - La Mesa (#469)',
    percentage: 30,
    children: [
      {
        title: 'Actual',
        value: 506.9,
      },
      {
        title: 'Expected',
        value: 600.3,
      },
    ],
  },
];

const Portfolio = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const theme = useThemeContext();

  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <View style={styles.header}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <MyTouchableOpacity>
              <IconImage iconName="navMenuWhite" />
            </MyTouchableOpacity>
            <Text
              style={[
                {
                  color: theme.palette.text.white,
                  fontSize: theme.font.size.xl,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              Portfolio
            </Text>
          </View>
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(dashboardRouteNames.PortfolioNavigation);
            }}>
            <Text
              style={[
                {
                  color: theme.palette.text.yellow,
                  fontSize: theme.font.size.sm,
                  fontWeight: theme.font.weight.sm,
                },
              ]}>
              View all
            </Text>
          </MyTouchableOpacity>
        </View>
        <View
          style={[
            styles.content,
            {
              borderTopColor: theme.palette.borderColor.tertiary,
            },
          ]}>
          <View
            style={[
              styles.contentItem,
              {
                borderRightWidth: 1,
                borderRightColor: theme.palette.borderColor.tertiary,
                flex: 2,
              },
            ]}>
            <Text
              style={[
                {
                  color: theme.palette.text.white,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              Sites
            </Text>
            <Text
              style={[
                styles.textValue,
                {
                  color: theme.palette.text.yellow,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                  borderBottomColor: theme.palette.text.yellow,
                },
              ]}>
              256
            </Text>
          </View>
          <View
            style={[
              styles.contentItem,
              {
                borderRightWidth: 1,
                borderRightColor: theme.palette.borderColor.tertiary,
                flex: 4,
              },
            ]}>
            <Text
              style={[
                {
                  color: theme.palette.text.white,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              Rated DC Capacity
            </Text>
            <Text
              style={[
                styles.textValue,
                {
                  color: theme.palette.text.yellow,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                  borderBottomColor: theme.palette.text.yellow,
                },
              ]}>
              154,657.66 kW
            </Text>
          </View>
          <View style={[styles.contentItem, {flex: 4}]}>
            <Text
              style={[
                {
                  color: theme.palette.text.white,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              Generation Now
            </Text>
            <Text
              style={[
                styles.textValue,
                {
                  color: theme.palette.text.yellow,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                  borderBottomColor: theme.palette.text.yellow,
                },
              ]}>
              1,038.9 kW-AC
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.titleWraped}>
        <IconImage iconName="electricity" />
        <Text
          style={[
            {
              color: theme.palette.text.primary,
              fontSize: theme.font.size.s,
              fontWeight: theme.font.weight.md,
            },
          ]}>
          Actual vs. Expected Power
        </Text>
      </View>
      <View style={styles.details}>
        {PortfolioData.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
      </View>
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  overview: {
    backgroundColor: '#373433',
    borderRadius: 8,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#fff',
    borderTopWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 16,
    // flex: 1
  },
  textValue: {
    borderBottomWidth: 2,
    paddingBottom: 2,
    textAlign: 'center',
  },
  titleWraped: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 16,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 16,
  },
});
