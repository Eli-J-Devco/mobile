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
  View
} from 'react-native';
import MyCheckBoxText from '../../../common/base/MyCheckBoxText';
import { useNavigation } from '../../../hooks/useNavigation';
import useThemeContext from '../../../hooks/useThemeContext';
import PrimaryFooter from '../footer/PrimaryFooter';
import { showNoti } from '../notify';

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
      <PrimaryFooter onOK={onApply} onCancel={onCancel} cancleText='Reset To default'/>
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
  srcollViewContentContainerStyle: {
    paddingBottom: 16,
  },
});
