/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';
import SvgIcon from '../../../../common/components/SvgIcon';
import AlertItem from './AlertItem';
import IconImage from '../../../../common/components/icons/IconImage';

const Alerts = () => {
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
            <TouchableOpacity activeOpacity={0.5}>
              <IconImage iconName="exclamation" />
            </TouchableOpacity>
            <Text
              style={[
                {
                  color: theme.palette.text.white,
                  fontSize: theme.font.size.xl,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              Alerts
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
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
          </TouchableOpacity>
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
              Total
            </Text>
            <Text
              style={[
                styles.textValue,
                {
                  color: theme.palette.text.yellow,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
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
              High Priority
            </Text>
            <Text
              style={[
                styles.textValue,
                {
                  color: theme.palette.text.yellow,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              80
            </Text>
          </View>
          <View style={[styles.contentItem]}>
            <Text
              style={[
                {
                  color: theme.palette.text.white,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              Low Priority
            </Text>
            <Text
              style={[
                styles.textValue,
                {
                  color: theme.palette.text.yellow,
                  fontSize: theme.font.size.s,
                  fontWeight: theme.font.weight.md,
                },
              ]}>
              20
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.titleWraped}>
        <View style={styles.title}>
          <IconImage iconName="electricity" />
          <Text
            style={[
              {
                color: theme.palette.text.primary,
                fontSize: theme.font.size.s,
                fontWeight: theme.font.weight.md,
              },
            ]}>
             Latest Fault Codes
          </Text>
        </View>
        <IconImage iconName="pause" />
      </View>
      <View style={styles.details}>
        <AlertItem />
        <AlertItem />
        <AlertItem />
      </View>
    </View>
  );
};

export default Alerts;

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
    paddingVertical: 16,
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    gap: 4,
  },
  textValue: {
    paddingBottom: 2,
    textAlign: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 16,
  },
  titleWraped: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 16,
  },
});
