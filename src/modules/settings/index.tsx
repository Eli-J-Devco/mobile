/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import useThemeContext from '../../hooks/useThemeContext';
import ConfigItem from './components/ConfigItem';
import {useNavigation} from '../../hooks/useNavigation';

const Settings = () => {
  const theme = useThemeContext();
  const navigation = useNavigation<SettingStackParamList>();

  const textStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: 'bold',
  };

  return (
    <View style={styles.container}>
      <Text style={textStyle}>Config</Text>
      <View
        style={[
          styles.contentContainer,
          {
            borderColor: theme.palette.borderColor.base,
            backgroundColor: theme.palette.background.primary,
          },
        ]}>
        <ConfigItem
          iconName="bell"
          title="Alert Config"
          onPress={() => navigation.navigate('AlertConfig')}
        />
        <ConfigItem
          iconName="bag"
          title="Performance Estimation"
          // onPress={() => navigation.navigate(settingRouteNames.PVModelSettings)}
        />
        <ConfigItem
          iconName="bag"
          title="PV Model Settings"
          onPress={() => navigation.navigate('PVModelSettings')}
        />
        <ConfigItem
          iconName="setting"
          title="Site Setting"
          onPress={() => navigation.navigate('SiteSetting')}
        />
        <ConfigItem
          iconName="dashboard"
          title="Leviton Widget"
          // onPress={() => navigation.navigate(settingRouteNames.PVModelSettings)}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    padding: 16,
    // borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 16,
    elevation: 20,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    height: 'auto',
  },
});
