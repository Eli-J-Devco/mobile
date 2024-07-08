import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';

interface IDetailItemProps {
  item: IDetailItem;
}

const DetailItem = ({item}: IDetailItemProps) => {
  const theme = useThemeContext();

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  const despriptionStyle: TextStyle = {
    color: theme.palette.text.secondary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
  };
  const percentageTextStyle: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.s,
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
      <Text style={titleStyle}>{item.name}</Text>
      {item.despription && (
        <Text style={despriptionStyle}>{item.despription}</Text>
      )}
      <View style={styles.percentageWraped}>
        <View style={[styles.percentage, {width: `${item.percentage}%`}]}>
          <Text style={percentageTextStyle}>{item.percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    gap: 8,
    shadowColor: 'rgba(16, 24, 40, 0.1)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
    padding: 16,
    width: '100%',
  },
  percentageWraped: {
    borderColor: '#7F7F7F',
    backgroundColor: '#fff',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
  },
  percentage: {
    borderColor: 'transparent',
    backgroundColor: '#25D922',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
