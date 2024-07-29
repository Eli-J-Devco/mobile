/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, View} from 'react-native';
import SvgIcon from '../../../common/components/SvgIcon';
import H2 from '../../../common/components/text/H2';
import H3 from '../../../common/components/text/H3';
import TextBetweenView from '../../../common/components/view/TextBetweenView';
import useThemeContext from '../../../hooks/useThemeContext';

const AdditionalData = () => {
  const theme = useThemeContext();

  const card = {
    backgroundColor: theme.palette.background.primary,
    borderWidth: 1,
    borderColor: theme.palette.borderColor.base,
  };

  const bgF0F0F0 = {
    backgroundColor: '#F0F0F0',
  };

  return (
    <View style={styles.container}>
      <H2>Additional Data</H2>

      <View style={[styles.card, card]}>
        <View style={styles.cardIconContainer}>
          <View style={styles.cardIcon}>
            <SvgIcon iconName="screens" />
          </View>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.cardTitle}>
            <H3>Elkor WattsOn Mk. II</H3>
          </View>
          <View style={styles.cardValueContainer}>
            <TextBetweenView
              color="secondary"
              borderBottom={false}
              leftText="Parameter"
              rightText="Real Power Total 3Ph (W)"
            />
            <TextBetweenView
              color="secondary"
              borderBottom={false}
              leftText="Value"
              rightText="100 kW"
            />
            <TextBetweenView
              color="secondary"
              borderBottom={false}
              leftText="Last updated"
              rightText="2 minutes"
            />
          </View>
        </View>
      </View>
      <View style={[styles.card, bgF0F0F0]}>
        <View style={styles.cardIconContainer}>
          <View style={styles.cardIcon}>
            <SvgIcon iconName="screens" />
          </View>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.cardTitle}>
            <H3>Elkor WattsOn Mk. II</H3>
          </View>
          <View style={styles.cardValueContainer}>
            <TextBetweenView
              color="secondary"
              borderBottom={false}
              leftText="Parameter"
              rightText="Real Power Total 3Ph (W)"
            />
            <TextBetweenView
              color="secondary"
              borderBottom={false}
              leftText="Value"
              rightText="100 kW"
            />
            <TextBetweenView
              color="secondary"
              borderBottom={false}
              leftText="Last updated"
              rightText="2 minutes"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdditionalData;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
    gap: 16,
    flexDirection: 'column',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    borderRadius: 8,
    width: '100%',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    flex: 12,
    gap: 8,
  },

  cardTitle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  cardValueContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
  },
  cardIconContainer: {
    flex: 2,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardIcon: {
    height: 45,
    width: 45,
    borderRadius: 40,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
