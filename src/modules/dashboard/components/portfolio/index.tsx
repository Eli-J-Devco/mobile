/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyTouchableOpacity from '../../../../common/base/MyTouchableOpacity';
import IconImage from '../../../../common/components/icons/IconImage';
import useThemeContext from '../../../../hooks/useThemeContext';
import {dashboardRouteNames} from '../../../../navigations/router-name';
import PortfolioItem from './PortfolioItem';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NavigationProp<any>>();
  const theme = useThemeContext();

  const textStyles = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xl,
    fontWeight: theme.font.weight.md,
  };

  const textViewAllStyles = {
    color: theme.palette.text.yellow,
    fontSize: theme.font.size.sm,
    fontWeight: theme.font.weight.sm,
  };

  const titleTextStyles = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: theme.font.weight.md,
  };

  const borderSites = {
    borderRightWidth: 1,
    borderRightColor: theme.palette.borderColor.tertiary,
    flex: 2,
  };

  const borderRight = {
    borderRightWidth: 1,
    borderRightColor: theme.palette.borderColor.tertiary,
    flex: 4,
  };

  const textOverViewStyles = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.s,
    fontWeight: theme.font.weight.md,
  };

  const textValueStyle = {
    color: theme.palette.text.yellow,
    fontSize: theme.font.size.s,
    fontWeight: theme.font.weight.md,
    borderBottomColor: theme.palette.text.yellow,
  };

  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <View style={styles.header}>
          <View style={styles.lableContainer}>
            <MyTouchableOpacity>
              <IconImage iconName="navMenuWhite" />
            </MyTouchableOpacity>
            <Text style={textStyles}>Portfolio</Text>
          </View>
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(dashboardRouteNames.PortfolioNavigation);
            }}>
            <Text style={textViewAllStyles}>View all</Text>
          </MyTouchableOpacity>
        </View>
        <View
          style={[
            styles.content,
            {
              borderTopColor: theme.palette.borderColor.tertiary,
            },
          ]}>
          <View style={[styles.contentItem, borderSites]}>
            <Text style={textOverViewStyles}>Sites</Text>
            <Text style={[styles.textValue, textValueStyle]}>256</Text>
          </View>
          <View style={[styles.contentItem, borderRight]}>
            <Text style={textOverViewStyles}>Rated DC Capacity</Text>
            <Text style={[styles.textValue, textValueStyle]}>
              154,657.66 kW
            </Text>
          </View>
          <View style={[styles.contentItem, styles.flex4]}>
            <Text style={textOverViewStyles}>Generation Now</Text>
            <Text style={[styles.textValue, textValueStyle]}>
              1,038.9 kW-AC
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.titleWraped}>
        <IconImage iconName="electricity" />
        <Text style={titleTextStyles}>Actual vs. Expected Power</Text>
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
  lableContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flex4: {
    flex: 4,
  },
});
