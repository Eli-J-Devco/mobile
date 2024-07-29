/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import ButonText from '../../../common/components/button/ButonText';
import IconImage from '../../../common/components/icons/IconImage';
import H3 from '../../../common/components/text/H3';
import PrimaryCardItem from '../../../common/components/view/PrimaryCardItem';
import TextBetweenView from '../../../common/components/view/TextBetweenView';
import useThemeContext from '../../../hooks/useThemeContext';
import {alertRouteNames} from '../../../navigations/router-name';

interface IAlertItemProps {
  bgColor?: string;
}

const AlertItem = ({bgColor}: IAlertItemProps) => {
  const theme = useThemeContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const touchableOpacityStyles = {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: theme.palette.background.dark,
  };
  const textStyles: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  return (
    <PrimaryCardItem bgColor={bgColor}>
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

        <View style={styles.container}>
          <ButonText
            touchableOpacityProps={{
              onPress: () => {
                navigation.navigate(alertRouteNames.AlertDetail);
              },
            }}
            text="Detail"
            touchableOpacityStyles={touchableOpacityStyles}
            textStyles={textStyles}
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    paddingVertical: 8,
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
