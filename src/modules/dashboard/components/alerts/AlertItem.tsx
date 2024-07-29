/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import MyTouchableOpacity from '../../../../common/base/MyTouchableOpacity';
import IconImage from '../../../../common/components/icons/IconImage';
import useThemeContext from '../../../../hooks/useThemeContext';
import {alertRouteNames} from '../../../../navigations/router-name';
import TextBetweenView from '../../../../common/components/view/TextBetweenView';

const AlertItem = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NavigationProp<any>>();
  const theme = useThemeContext();

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
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
        <Text style={titleStyle}>Elkor WattsOn Mk. II</Text>
        <TextBetweenView
          rightText="PV System Inverter"
          leftText="Device Categorize"
        />
        <TextBetweenView rightText="COMM" leftText="Error Level" type="alert" />
        <TextBetweenView rightText="06/20/2024 10:00 AM" leftText="Opened" />
        <TextBetweenView
          rightText="Device has lost communication"
          leftText="Issue"
        />
      </View>
      <MyTouchableOpacity
        touchableOpacityStyle={styles.right}
        onPress={() =>
          navigation.navigate('MainNavigation', {
            screen: alertRouteNames.AlertDetail,
            params: {sort: 'latest'},
          })
        }>
        <IconImage iconName="arrowRight" />
      </MyTouchableOpacity>
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
