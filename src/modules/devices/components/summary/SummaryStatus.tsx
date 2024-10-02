import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import MyTouchableOpacity from '../../../../common/base/MyTouchableOpacity';
import {useNavigation} from '../../../../hooks/useNavigation';
import {devicesRouteNames} from '../../../../navigations/router-name';
import useThemeContext from '../../../../hooks/useThemeContext';

interface ISummaryStatusProps {
    color: string
    title: string
}

const SummaryStatus = ({ color, title } : ISummaryStatusProps) => {
  const navigation = useNavigation();
  const theme = useThemeContext()

  const countText: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  return (
    <MyTouchableOpacity
      onPress={() => navigation.navigate(devicesRouteNames.SummaryDetail)}
      touchableOpacityProps={{
        style: styles.item,
      }}>
      <View style={[styles.count, { backgroundColor: color }]}>
        <Text style={countText}>10</Text>
      </View>
      <Text>{title}</Text>
    </MyTouchableOpacity>
  );
};

export default SummaryStatus;

const styles = StyleSheet.create({
  count: {
    paddingHorizontal: 16,
    borderRadius: 50,
    paddingVertical: 8,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
