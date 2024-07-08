/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';

interface PortfolioItemProps {
  item: IDashboardPortfolio;
}

const PortfolioItem = ({item}: PortfolioItemProps) => {
  const theme = useThemeContext();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palette.background.primary,
        },
      ]}>
      <View
        style={[
          styles.percentage,
          {
            backgroundColor: theme.palette.background.secondary,
          },
        ]}>
        <Text
          style={[
            styles.percentageText,
            {
              color: theme.palette.text.white,
              backgroundColor: theme.palette.background.dark,
              fontSize: theme.font.size.xs,
            },
          ]}>
          {item.percentage}%
        </Text>
        <Text
          style={[
            {
              color: theme.palette.text.primary,
              fontSize: theme.font.size.xs,
            },
          ]}>
          A/E
        </Text>
      </View>
      <View style={[styles.content, {}]}>
        <Text
          style={[
            {
              color: theme.palette.text.primary,
              fontSize: theme.font.size.xs,
              fontWeight: '700',
            },
          ]}>
          {item.name}
        </Text>
        {item.children.map((child, index) => (
          <View style={styles.contentItem} key={index}>
            <Text
              style={{
                color: theme.palette.text.primary,
                fontSize: theme.font.size.s,
                fontWeight: '400',
              }}>
              {child.title}
            </Text>
            <Text
              style={{
                color: theme.palette.text.primary,
                fontSize: theme.font.size.s,
                fontWeight: '400',
              }}>
              {child.value}kW
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PortfolioItem;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    // flex: 1,
    padding: 8,
  },
  percentage: {
    padding: 8,
    borderRadius: 8,
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  percentageText: {
    padding: 8,
    borderRadius: 8,
    fontWeight: '500',
  },
  content: {
    flex: 9,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
