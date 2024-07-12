import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import SvgIcon from '../../../common/components/SvgIcon';
import useThemeContext from '../../../hooks/useThemeContext';

const Components = () => {
  const theme = useThemeContext();

  const textTitleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };
  const textValueStyle: TextStyle = {
    color: theme.palette.text.secondary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.palette.background.primary,
            borderWidth: 1,
            borderColor: theme.palette.borderColor.base,
          },
        ]}>
        <View style={styles.cardIconContainer}>
          <View style={styles.cardIcon}>
            <SvgIcon iconName="screens" />
          </View>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.cardTitle}>
            <Text style={textTitleStyle}>Elkor WattsOn Mk. II</Text>
            <SvgIcon w={20} h={20} iconName="checkRound" />
          </View>
          <View style={styles.cardValueContainer}>
            <View style={styles.cardValue}>
              <Text style={textValueStyle}>Value</Text>
              <Text style={textValueStyle}>100 kW</Text>
            </View>
            <View style={styles.cardValue}>
              <Text style={textValueStyle}>Last updated</Text>
              <Text style={textValueStyle}>2 minutes</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.card,
          {
            backgroundColor: '#F0F0F0',
          },
        ]}>
        <View style={styles.cardIconContainer}>
          <View style={styles.cardIcon}>
            <SvgIcon iconName="screens" />
          </View>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.cardTitle}>
            <Text style={textTitleStyle}>Elkor WattsOn Mk. II</Text>
            <SvgIcon w={16} h={16} iconName="exclamationRed" />
          </View>
          <View style={styles.cardValueContainer}>
            <View style={styles.cardValue}>
              <Text style={textValueStyle}>Value</Text>
              <Text style={textValueStyle}>100 kW</Text>
            </View>
            <View style={styles.cardValue}>
              <Text style={textValueStyle}>Last updated</Text>
              <Text style={textValueStyle}>2 minutes</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Components;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
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
  cardValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
