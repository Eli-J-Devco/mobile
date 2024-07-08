/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SvgIcon from '../../../common/components/SvgIcon';
import useThemeContext from '../../../hooks/useThemeContext';

const AlertItem = () => {
  const theme = useThemeContext();

  const styleText: any = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
  };

  const borderBottomStyle: ViewStyle = {
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.borderColor.secondary,
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
        <SvgIcon iconName="exclamationRed" />
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
        <View style={[styles.detailContent, borderBottomStyle]}>
          <Text style={styleText}>Value</Text>
          <Text style={styleText}>3.6 kW</Text>
        </View>
        <View style={[styles.detailContent, borderBottomStyle]}>
          <Text style={styleText}>Open Period</Text>
          <Text style={styleText}>10 Days</Text>
        </View>
        <View style={[styles.detailContent, borderBottomStyle]}>
          <Text style={styleText}>Opened</Text>
          <Text style={styleText}>06/20/2024 10:00 AM</Text>
        </View>
        <View style={[styles.detailContent, borderBottomStyle]}>
          <Text style={styleText}>Closed</Text>
          <Text style={styleText}>N/A</Text>
        </View>
        <View style={[styles.detailContent, borderBottomStyle]}>
          <Text style={styleText}>Issue</Text>
          <Text style={styleText}>Device has lost communication</Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: '100%',
            paddingVertical: 8,
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              backgroundColor: theme.palette.background.dark,
            }}>
            <Text
              style={{
                color: theme.palette.text.white,
                fontSize: theme.font.size.xs,
                fontWeight: '700',
              }}>
              Detail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlertItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    shadowColor: 'rgba(16, 24, 40, 0.1)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
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
  center: {
    flex: 12,
  },
});
