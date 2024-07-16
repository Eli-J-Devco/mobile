/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import H2 from '../../../../common/components/text/H2';
import H3 from '../../../../common/components/text/H3';
import TextBetweenView from '../../../../common/components/view/TextBetweenView';

const SummaryDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <H2>Healthy Production</H2>
        <View style={styles.roundedWrapper}>
          <View style={styles.rounded}>
            <Text style={styles.text}>100%</Text>
          </View>
        </View>
      </View>
      <View style={styles.history}>
        <View style={styles.historyHeader}>
          <H3>Devies</H3>
          <H3>Data Changed</H3>
        </View>

        <TextBetweenView
          leftText="Elkor WattsOn Mk. II"
          rightText="06/20/2024"
          paddingHorizontal={16}
          borderBottom={false}
        />
        <TextBetweenView
          leftText="Elkor WattsOn Mk. II"
          rightText="06/20/2024"
          paddingHorizontal={16}
          backgroundColor="#F3FBFF"
          borderBottom={false}
        />
        <TextBetweenView
          leftText="Elkor WattsOn Mk. II"
          rightText="06/20/2024"
          paddingHorizontal={16}
          borderBottom={false}
        />
        <TextBetweenView
          leftText="Elkor WattsOn Mk. II"
          rightText="06/20/2024"
          paddingHorizontal={16}
          backgroundColor="#F3FBFF"
          borderBottom={false}
        />
        <TextBetweenView
          leftText="Elkor WattsOn Mk. II"
          rightText="06/20/2024"
          paddingHorizontal={16}
          borderBottom={false}
        />
      </View>
    </View>
  );
};

export default SummaryDetail;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 16,
  },
  roundedWrapper: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: '#3AA0E1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rounded: {
    height: 80,
    width: 80,
    borderRadius: 90,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  history: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
    paddingTop: 32,
  },
  historyContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
  },
  historyHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: '#F3FBFF',
    padding: 16,
  },
});
