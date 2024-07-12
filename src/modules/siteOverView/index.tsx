import {View, Text, StyleSheet, ScrollView, TextStyle} from 'react-native';
import React from 'react';
import useThemeContext from '../../hooks/useThemeContext';
import Tabs from '../../common/components/tab/Tabs';
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
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
    </ScrollView>
  );
};

export default SiteOverView;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingTop: 8,
    paddingHorizontal: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 16,
  },
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
