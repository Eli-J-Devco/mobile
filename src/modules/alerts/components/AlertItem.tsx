/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButonText from '../../../common/components/button/ButonText';
import IconImage from '../../../common/components/icons/IconImage';
import H3 from '../../../common/components/text/H3';
import PrimaryCardItem from '../../../common/components/view/PrimaryCardItem';
import TextBetweenView from '../../../common/components/view/TextBetweenView';
import useThemeContext from '../../../hooks/useThemeContext';
import {alertRouteNames} from '../../../navigations/router-name';

const AlertItem = () => {
  const theme = useThemeContext();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const styleText: any = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
  };

  return (
    <PrimaryCardItem>
      <View style={styles.left}>
        <IconImage iconName="exclamationRed" />
      </View>
      <View style={styles.center}>
        <H3>Elkor WattsOn Mk. II</H3>
        <TextBetweenView
          leftText="Device Categorize"
          rightText="PV System Inverter"
        />

        <TextBetweenView type="alert" leftText="Error Level" rightText="COMM" />
        <TextBetweenView leftText="Value" rightText="3.6 kW" />
        <TextBetweenView leftText="Open Period" rightText="10 Days" />
        <TextBetweenView leftText="Opened" rightText="06/20/2024 10:00 AM" />

        <TextBetweenView leftText="Closed" rightText="N/A" />
        <TextBetweenView
          leftText="Issue"
          rightText="Device has lost communication"
        />

        <View
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: '100%',
            paddingVertical: 8,
          }}>
          <ButonText
            touchableOpacityProps={{
              onPress: () => {
                navigation.navigate(alertRouteNames.AlertDetail);
              },
            }}
            text="Detail"
            touchableOpacityStyles={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              backgroundColor: theme.palette.background.dark,
            }}
            textStyles={{
              color: theme.palette.text.white,
              fontSize: theme.font.size.xs,
              fontWeight: '700',
            }}
          />
        </View>
      </View>
    </PrimaryCardItem>
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
