/* eslint-disable no-magic-numbers */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import IconImage from '../../common/components/icons/IconImage';
import useThemeContext from '../../hooks/useThemeContext';
import {alertRouteNames} from '../../navigations/router-name';
import AlertItem from './components/AlertItem';
import { useNavigation } from '../../hooks/useNavigation';

const Alerts = () => {
  const theme = useThemeContext();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

  const titleOverView: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  const valueOverView: TextStyle = {
    color: theme.palette.text.yellow,
    fontSize: theme.font.size.s,
    fontWeight: '700',
  };

  const btnText: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
  };

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  const switchTextStyles: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.mini,
    fontWeight: '400',
  };

  return (
    <View>
      <View style={styles.overViewBtnWraped}>
        <View
          style={[
            styles.overViewBtn,
            {
              backgroundColor: theme.palette.background.dark,
            },
          ]}>
          <Text style={titleOverView}>Total</Text>
          <Text style={valueOverView}>270</Text>
        </View>
        <View
          style={[
            styles.overViewBtn,
            {
              backgroundColor: theme.palette.background.dark,
            },
          ]}>
          <Text style={titleOverView}>High Priority</Text>
          <Text style={valueOverView}>20</Text>
        </View>
        <View
          style={[
            styles.overViewBtn,
            {
              backgroundColor: theme.palette.background.dark,
            },
          ]}>
          <Text style={titleOverView}>Low Priority</Text>
          <Text style={valueOverView}>20</Text>
        </View>
      </View>
      <View style={styles.filterWraped}>
        <View style={styles.filterMain}>
          <View style={styles.flexContainer}>
            <IconImage iconName="exclamationBlack" />
            <Text style={titleStyle}>Alerts</Text>
          </View>
          <View style={styles.flexContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(alertRouteNames.AlertFilter)}
              activeOpacity={0.5}
              style={[
                styles.flexContainer,
                styles.btn,
                {borderColor: theme.palette.borderColor.base},
              ]}>
              <IconImage size={18} iconName="filter" />
              <Text style={btnText}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.flexContainer,
                styles.btn,
                {borderColor: theme.palette.borderColor.base},
              ]}>
              <IconImage size={18} iconName="filter" />
              <Text style={btnText}>Alert Config</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.flexContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <IconImage size={20} iconName="repeat" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.flexContainer,
                styles.btn,
                {borderColor: theme.palette.borderColor.base},
              ]}>
              <IconImage size={14} iconName="upload" />
              <Text style={btnText}>Export</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.flexContainer}>
            <Switch
              trackColor={{
                false: '#767577',
                true: theme.palette.background.dark,
              }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
              
            />
            <Text style={switchTextStyles}>Group by site</Text>
          </View>
        </View>
      </View>
      <View style={styles.listAlert}>
        {[...new Array(10)].map((_, index) => (
          <AlertItem key={index} bgColor={index % 2 === 0 ? '#F2F2F2' : ''} />
        ))}
      </View>
    </View>
  );
};

export default Alerts;

const styles = StyleSheet.create({
  overViewBtnWraped: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  overViewBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 3,
    padding: 8,
    borderRadius: 8,
    // gap: 4,
  },
  listAlert: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  filterWraped: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 16,
  },
  filterMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  btn: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  switch: {
    transform: [
      {
        scaleX: 1
      }
    ]
  }
});
