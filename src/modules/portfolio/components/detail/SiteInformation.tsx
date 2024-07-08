import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';

const SiteInformation = () => {
  const theme = useThemeContext();

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  const itemTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palette.background.primary,
        },
      ]}>
      <Text style={titleStyle}>Site Information</Text>
      <View style={styles.item}>
        <Text style={itemTextStyle}>Customer Entity</Text>
        <Text style={itemTextStyle}>Target</Text>
      </View>
      <View style={styles.item}>
        <Text style={itemTextStyle}>Store Number</Text>
        <Text style={itemTextStyle}>305</Text>
      </View>
      <View style={styles.item}>
        <Text style={itemTextStyle}>Date Built</Text>
        <Text style={itemTextStyle}>03/21/2024</Text>
      </View>
    </View>
  );
};

export default SiteInformation;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 8,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});
