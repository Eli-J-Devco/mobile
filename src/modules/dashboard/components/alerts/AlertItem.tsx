/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgIcon from '../../../../common/components/SvgIcon';
import useThemeContext from '../../../../hooks/useThemeContext';
import IconImage from '../../../../common/components/icons/IconImage';

const AlertItem = () => {
  const theme = useThemeContext();

  const styleText: any = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palette.background.primary,
        },
      ]}>
      <View style={styles.left}>
        <IconImage iconName="exclamationRed" />
      </View>
      <View style={styles.center}>
        <Text
          style={[
            {
              color: theme.palette.text.primary,
              fontSize: theme.font.size.xs,
              fontWeight: '700',
            },
          ]}>
          Elkor WattsOn Mk. II
        </Text>
        <View
          style={[
            styles.detailContent,
            {
              borderBottomWidth: 1,
              borderBottomColor: theme.palette.borderColor.secondary,
            },
          ]}>
          <Text style={styleText}>Device Categorize</Text>
          <Text style={styleText}>PV System Inverter</Text>
        </View>
        <View
          style={[
            styles.detailContent,
            {
              borderBottomWidth: 1,
              borderBottomColor: theme.palette.borderColor.secondary,
            },
          ]}>
          <Text style={styleText}>Error Level</Text>
          <Text
            style={[
              styleText,
              {
                paddingVertical: 4,
                borderRadius: 4,
                backgroundColor: theme.palette.background.yellow,
                paddingHorizontal: 8,
              },
            ]}>
            COMM
          </Text>
        </View>
        <View
          style={[
            styles.detailContent,
            {
              borderBottomWidth: 1,
              borderBottomColor: theme.palette.borderColor.secondary,
            },
          ]}>
          <Text style={styleText}>Opened</Text>
          <Text style={styleText}>06/20/2024 10:00 AM</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styleText}>Issue</Text>
          <Text style={styleText}>Device has lost communication</Text>
        </View>
      </View>
      <View style={styles.right}>
        <IconImage iconName="arrowRight" />
      </View>
    </View>
  );
};

export default AlertItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    shadowColor: 'rgba(16, 24, 40, 0.1)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 8,
    padding: 8,
  },
  detailContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 4,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  center: {
    flex: 8,
  },
});
