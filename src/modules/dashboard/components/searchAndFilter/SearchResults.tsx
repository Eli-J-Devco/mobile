/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect} from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import IconImage from '../../../../common/components/icons/IconImage';
import PrimaryCardItem from '../../../../common/components/view/PrimaryCardItem';
import TextBetweenView from '../../../../common/components/view/TextBetweenView';
import useThemeContext from '../../../../hooks/useThemeContext';
import {useRoute} from '@react-navigation/native';

const SearchResults = () => {
  const theme = useThemeContext();
  const router = useRoute();

  useEffect(() => {
    // console.log('router', router.params);
  }, [router.params]);

  const textStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '600',
  };

  const tilteStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '600',
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <IconImage size={20} iconName="electricity" />
        <Text style={textStyle}>Results</Text>
      </View>

      <View style={styles.content}>
        {[...new Array(10)].map((_, index) => (
          <PrimaryCardItem key={index} gap={8}>
            <View style={styles.itemContent}>
              <Text style={tilteStyle}>Target Eastvale - T1961</Text>
              <TextBetweenView
                leftText="System Size (kW - DC)"
                rightText="546.5 kW"
              />
              <TextBetweenView
                leftText="Current Production (kW - AC)"
                rightText="546.5 kW"
              />
              <TextBetweenView
                leftText="Last updated"
                rightText="4 minutes"
                borderBottom={false}
              />
            </View>
            <View style={styles.itemIcon}>
              <IconImage size={20} iconName="arrowRight" />
            </View>
          </PrimaryCardItem>
        ))}
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    justifyContent: 'flex-start',
  },
  itemContent: {
    flex: 16,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  itemIcon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    gap: 16,
    paddingBottom: 8,
  },
});
