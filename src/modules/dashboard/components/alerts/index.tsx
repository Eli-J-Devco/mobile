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
import AlertItem from './AlertItem';

const Alerts = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NavigationProp<any>>();
  const theme = useThemeContext();

  const titleStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xl,
    fontWeight: theme.font.weight.md,
  };

  const viewAllStyles = {
    color: theme.palette.text.yellow,
    fontSize: theme.font.size.sm,
    fontWeight: theme.font.weight.sm,
  };

  const borderRightStyle = {
    borderRightWidth: 1,
    borderRightColor: theme.palette.borderColor.tertiary,
  };

  const textOverViewStyles = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.s,
    fontWeight: theme.font.weight.md,
  };

  const valueOverViewStyles = {
    color: theme.palette.text.yellow,
    fontSize: theme.font.size.s,
    fontWeight: theme.font.weight.md,
  };
  const labelStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: theme.font.weight.md,
  };

  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <MyTouchableOpacity>
              <IconImage iconName="exclamation" />
            </MyTouchableOpacity>
            <Text style={titleStyle}>Alerts</Text>
          </View>
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(dashboardRouteNames.AlertsNavigation);
            }}>
            <Text style={viewAllStyles}>View all</Text>
          </MyTouchableOpacity>
        </View>
        <View
          style={[
            styles.content,
            {
              borderTopColor: theme.palette.borderColor.tertiary,
            },
          ]}>
          <View style={[styles.contentItem, borderRightStyle, styles.flex2]}>
            <Text style={textOverViewStyles}>Total</Text>
            <Text style={[styles.textValue, valueOverViewStyles]}>256</Text>
          </View>
          <View style={[styles.contentItem, styles.flex4, borderRightStyle]}>
            <Text style={textOverViewStyles}>High Priority</Text>
            <Text style={[styles.textValue, valueOverViewStyles]}>80</Text>
          </View>
          <View style={[styles.contentItem, styles.flex4]}>
            <Text style={textOverViewStyles}>Low Priority</Text>
            <Text style={[styles.textValue, valueOverViewStyles]}>20</Text>
          </View>
        </View>
      </View>
      <View style={styles.titleWraped}>
        <View style={styles.title}>
          <IconImage iconName="electricity" />
          <Text style={labelStyle}>Latest Fault Codes</Text>
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
    paddingVertical: 8,
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flex2: {
    flex: 2,
  },
  flex4: {
    flex: 4,
  },
});
