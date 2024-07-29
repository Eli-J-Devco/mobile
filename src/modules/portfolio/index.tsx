/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import {portfolioRouteName} from '../../navigations/router-name';
import PofolioItem from './components/PofolioItem';
import IconImage from '../../common/components/icons/IconImage';

const PortFolio = () => {
  const theme = useThemeContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const titleOverView: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  const valueOverView: TextStyle = {
    color: theme.palette.text.yellow,
    fontSize: theme.font.size.s,
    fontWeight: '700',
  };

  const lable: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const gap4 = {
    gap: 4,
  };

  const bg = {backgroundColor: theme.palette.background.dark};

  return (
    <View>
      <View style={styles.overViewBtnWraped}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.srcollContentContainerStyle}>
          <View style={[styles.overViewBtn, bg]}>
            <Text style={titleOverView}>Sites</Text>
            <Text style={valueOverView}>270</Text>
          </View>
          <View style={[styles.overViewBtn, bg]}>
            <Text style={titleOverView}>Total Alerts</Text>
            <Text style={valueOverView}>20</Text>
          </View>
          <View style={[styles.overViewBtn, bg]}>
            <Text style={titleOverView}>Throughput</Text>
            <Text style={valueOverView}>7,485.1 kW - AC</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.filterWraped}>
        <View style={[styles.flexContainer, gap4]}>
          <IconImage iconName="electricity" />
          <Text style={lable}>Portfolio</Text>
        </View>
        <View style={styles.flexContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <IconImage iconName="repeat" size={18} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <IconImage iconName="upload" size={16} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate(portfolioRouteName.PortfolioFilter)
            }>
            <IconImage iconName="filter" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate(portfolioRouteName.ArrangeColumns)
            }>
            <IconImage iconName="pause" size={18} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listPofolio}>
        <PofolioItem />
        <PofolioItem />
        <PofolioItem />
        <PofolioItem />
        <PofolioItem />
        <PofolioItem />
      </View>
    </View>
  );
};

export default PortFolio;

const styles = StyleSheet.create({
  overViewBtnWraped: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  overViewBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: 8,
    borderRadius: 8,
    // gap: 4,
  },
  listPofolio: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  filterWraped: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
  },

  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },
  srcollContentContainerStyle: {
    width: '100%',
    display: 'flex',
    gap: 8,
  },
});
