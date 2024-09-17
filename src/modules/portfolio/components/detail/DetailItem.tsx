import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';
import MyProcess from '../../../../common/base/MyProcess';

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
     <MyProcess percentage={item.percentage} />
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
});
