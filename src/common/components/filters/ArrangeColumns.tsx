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
import MyCheckBoxText from '../../../common/base/MyCheckBoxText';
import useThemeContext from '../../../hooks/useThemeContext';

interface IArrangeColumnsProps {
  data: IArrangeColumns[];
}

const ArrangeColumns = ({data}: IArrangeColumnsProps) => {
  const theme = useThemeContext();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const btnTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '400',
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <View style={[styles.container]}>
          <Text style={titleStyle}>Arrange Columns</Text>
          {data.map((item, index) => (
            <MyCheckBoxText
              key={item.value}
              value={item.value}
              onChecked={(c, v) => console.log('---onChecked--: ', c, v)}>
              {item.title}
            </MyCheckBoxText>
          ))}
        </View>
      </ScrollView>
      <View style={styles.actionWraped}>
        <TouchableOpacity style={styles.btnReset} activeOpacity={0.5}>
          <Text style={btnTextStyle}> Reset To default</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnApply} activeOpacity={0.5}>
          <Text style={btnTextStyle}>Apply</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ArrangeColumns;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
    position: 'relative',
    flex: 1,
    padding: 16,
  },
  actionWraped: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DCDCDC',
    // position: 'absolute',
    // bottom: 0,
  },
  btnReset: {
    flex: 5,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8B8B8',
    borderRadius: 8,
  },
  btnApply: {
    flex: 5,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEDA00',
    borderRadius: 8,
  },
});
