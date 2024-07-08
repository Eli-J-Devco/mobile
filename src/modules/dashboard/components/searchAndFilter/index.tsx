/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, ScrollView, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import useThemeContext from '../../../../hooks/useThemeContext';
import ButonText from '../../../../common/components/button/ButonText';
import MySelect from '../../../../common/base/MySelect';
import MyDatePicker from '../../../../common/base/MyDatePicker';
import MyTextInput from '../../../../common/base/MyTextInput';

const SearchAndFilter = () => {
  const theme = useThemeContext();

  const label: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.mini,
    fontWeight: '400',
    flex: 3,
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.palette.background.primary},
        ]}>
        <Text
          style={{
            color: theme.palette.text.primary,
            fontSize: theme.font.size.sm,
            fontWeight: '700',
          }}>
          Search By
        </Text>
        <View style={[styles.content, styles.search]}>
          <ButonText
            text="Site Name"
            touchableOpacityStyles={styles.butonText}
          />
          <ButonText text="Street" touchableOpacityStyles={styles.butonText} />
          <ButonText text="City" touchableOpacityStyles={styles.butonText} />
          <ButonText text="State" touchableOpacityStyles={styles.butonText} />
          <ButonText text="State" touchableOpacityStyles={styles.butonText} />
          <ButonText
            text="Zip Code"
            touchableOpacityStyles={styles.butonText}
          />
          <ButonText text="Site ID" touchableOpacityStyles={styles.butonText} />
          <ButonText
            text="Device Name"
            touchableOpacityStyles={styles.butonText}
          />
          <ButonText
            text="Serial Number"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.mini,
            }}
          />
          <ButonText
            text="Hardware ID"
            touchableOpacityStyles={styles.butonText}
            textStyles={{
              fontSize: theme.font.size.mini,
            }}
          />
        </View>
      </View>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.palette.background.primary},
        ]}>
        <Text
          style={{
            color: theme.palette.text.primary,
            fontSize: theme.font.size.sm,
            fontWeight: '700',
          }}>
          Filter By
        </Text>
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
              <MyDatePicker placeholder="- - -" containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>AC Capacity (kW)</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" containerStyle={styles.col4} />
              <MyDatePicker placeholder="- - -" containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Device AC Rating</Text>
            <View style={styles.filterContent}>
              <MySelect placeholder="- - -" containerStyle={styles.col4} />
              <MyDatePicker placeholder="- - -" containerStyle={styles.col6} />
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={label}>Data Send Time</Text>
            <View style={styles.filterContent}>
              <MyTextInput style={styles.input} placeholder="- - -" />
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
  input: {
    height: 37,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#C5C5C5',
    paddingLeft: 8,
    paddingVertical: 3,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 4,
  },
});
