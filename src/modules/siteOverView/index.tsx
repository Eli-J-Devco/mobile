import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import MyScrollView from '../../common/base/MyScrollView';
import Tabs from '../../common/components/tab/Tabs';
import useThemeContext from '../../hooks/useThemeContext';
import Charting from './components/Charting';
import Components from './components/Components';
import MapSiteOverview from './components/Map';

const items: ITab[] = [
  {
    key: '1',
    label: 'Charting',
    children: <Charting />,
  },
  {
    key: '2',
    label: 'Compoments',
    children: <Components />,
  },
  {
    key: '3',
    label: 'Map',
    children: <MapSiteOverview />,
  },
];

const SiteOverView = () => {
  const theme = useThemeContext();

  const labelStyle: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const valueStyle: TextStyle = {
    color: theme.palette.text.yellow,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  return (
    <MyScrollView>
      <View
        style={[
          styles.overView,
          {backgroundColor: theme.palette.background.dark},
        ]}>
        <Text style={labelStyle}>PV Nameplate (kW-AC)</Text>
        <Text style={valueStyle}>0 kW-AC</Text>
      </View>
      <View
        style={[
          styles.overView,
          {backgroundColor: theme.palette.background.dark},
        ]}>
        <Text style={labelStyle}>Generation Now</Text>
        <Text style={valueStyle}>0 kW</Text>
      </View>
      <View
        style={[
          styles.overView,
          {backgroundColor: theme.palette.background.dark},
        ]}>
        <Text style={labelStyle}>Total Generation This Month</Text>
        <Text style={valueStyle}>57,065.42 kWh</Text>
      </View>

      <Tabs items={items} />
    </MyScrollView>
  );
};

export default SiteOverView;

const styles = StyleSheet.create({
  overView: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4,
  },
});
