/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, StyleSheet, Text, TextStyle, View} from 'react-native';
import MyDatePicker from '../../../../common/base/MyDatePicker';
import MySelect from '../../../../common/base/MySelect';
import ButonText from '../../../../common/components/button/ButonText';
import PrimaryInput from '../../../../common/components/input/PrimaryInput';
import useThemeContext from '../../../../hooks/useThemeContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {dashboardRouteNames} from '../../../../navigations/router-name';

const SearchAndFilter = () => {
  const theme = useThemeContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NavigationProp<any>>();

  const label: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
    flex: 3,
  };

  const textStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.palette.background.primary},
        ]}>
        <Text style={textStyle}>Search By</Text>
        <View style={[styles.content, styles.search]}>
          <ButonText
            text="Site Name"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="Street"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="City"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="State"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="State"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="Zip Code"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="Device Name"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="Serial Number"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
          <ButonText
            text="Hardware ID"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
        </View>
      </View>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.palette.background.primary},
        ]}>
        <Text style={textStyle}>Filter By</Text>
        <View style={[styles.content, styles.filter]}>
          <View style={styles.filterItem}>
            <Text style={label}>Inverter Type</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Built Since</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" containerStyle={styles.col4} />
              <MyDatePicker placeholder="- - -" containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Commissioning</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" containerStyle={styles.col4} />
              <MyDatePicker placeholder="- - -" containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>DC Capacity (kW)</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" containerStyle={styles.col4} />
              <PrimaryInput containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>AC Capacity (kW)</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" containerStyle={styles.col4} />
              <PrimaryInput containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Device AC Rating</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" containerStyle={styles.col4} />
              <PrimaryInput containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Data Send Time</Text>
            <View style={styles.filterContent}>
              <PrimaryInput />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Tag Site</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Tag Device</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" />
            </View>
          </View>
        </View>
        <View style={styles.action}>
          <ButonText
            text="Apply"
            touchableOpacityStyles={{
              ...styles.btn,
              backgroundColor: theme.palette.background.dark,
            }}
            textStyles={{
              fontSize: theme.font.size.s,
              color: theme.palette.text.white,
            }}
            onPress={() => {
              navigation.navigate(dashboardRouteNames.SearchResult, {
                sort: 'latest',
                seatchBy: 'SiteName',
                filterBy: {
                  InverterType: '1',
                  TagSite: '2',
                  TagDevices: '3',
                },
              });
            }}
          />
          <ButonText
            text="Clear"
            touchableOpacityStyles={{
              ...styles.btn,
              ...styles.btnClear,
              backgroundColor: theme.palette.background.primary,
            }}
            textStyles={{
              fontSize: theme.font.size.s,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchAndFilter;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 20,
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  container: {
    padding: 16,
  },
  content: {
    display: 'flex',
    gap: 10,
    paddingTop: 17,
  },
  search: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  filter: {
    flexDirection: 'column',
  },
  butonText: {
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  filterItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  filterContent: {
    flex: 7,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  col4: {
    flex: 4,
  },
  col6: {
    flex: 6,
  },
  btn: {
    borderRadius: 20,
    paddingHorizontal: 24,
  },
  btnClear: {
    backgroundColor: 'none',
    borderWidth: 1,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    width: `100%`,
    paddingBottom: 16,
    paddingTop: 24,
  },
});
