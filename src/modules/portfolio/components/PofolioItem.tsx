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
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import SvgIcon from '../../../common/components/SvgIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {portfolioRouteName} from '../../../navigations/router-name';

const PofolioItem = () => {
  const theme = useThemeContext();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const borderBottomStyle: ViewStyle = {
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.borderColor.secondary,
  };

  const textStyle: TextStyle = {
    color: theme.palette.text.secondary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.palette.background.primary},
      ]}>
      <Text
        style={[
          {
            color: theme.palette.text.primary,
            fontSize: theme.font.size.xs,
            fontWeight: '700',
          },
        ]}>
        Target Eastvale - T1961
      </Text>
      <View style={[styles.contentWraped]}>
        <View style={[styles.content]}>
          <View style={[styles.contentItem, borderBottomStyle]}>
            <Text style={[textStyle]}>System Size (kW - DC)</Text>
            <Text style={[textStyle]}>546.5 kW</Text>
          </View>
          <View style={[styles.contentItem, borderBottomStyle]}>
            <Text style={[textStyle]}>Current Production (kW - AC)</Text>
            <Text style={[textStyle]}>546.5 kW</Text>
          </View>
          <View style={[styles.contentItem]}>
            <Text style={[textStyle]}>Last updated</Text>
            <Text style={[textStyle]}>4 minutes</Text>
          </View>
        </View>
        <View style={[styles.action]}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate(portfolioRouteName.PortfolioDetails)
            }>
            <SvgIcon iconName="arrowRight" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PofolioItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    shadowColor: 'rgba(16, 24, 40, 0.1)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
    borderRadius: 8,
    padding: 8,
  },
  contentWraped: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 9,
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    width: '100%',
    paddingVertical: 8,
  },
  action: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
