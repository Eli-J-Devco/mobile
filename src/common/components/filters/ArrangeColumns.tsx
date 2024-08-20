/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

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
import {useNavigation} from '../../../hooks/useNavigation';
import {showNoti} from '../notify';

interface IArrangeColumnsProps {
  data: IArrangeColumns[];
}

const ArrangeColumns = ({data}: IArrangeColumnsProps) => {
  const theme = useThemeContext();
  const navigation = useNavigation();

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

  const onApply = () => {
    showNoti('success', 'Column Config', 'Column Config has been updated');
    navigation.goBack();
  };

  const onCancel = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.srcollViewContentContainerStyle}>
        <View style={styles.container}>
          <Text style={titleStyle}>Arrange Columns</Text>
          {data.map(item => (
            <MyCheckBoxText
              key={item.value}
              value={item.value}
              onChecked={() => {
                // console.log('---onChecked--: ', c, v);
              }}>
              {item.title}
            </MyCheckBoxText>
          ))}
        </View>
      </ScrollView>
      <View style={styles.actionWraped}>
        <TouchableOpacity
          onPress={onCancel}
          style={styles.btnReset}
          activeOpacity={0.5}>
          <Text style={btnTextStyle}> Reset To default</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onApply}
          style={styles.btnApply}
          activeOpacity={0.5}>
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
  srcollViewContentContainerStyle: {
    paddingBottom: 16,
  },
});
