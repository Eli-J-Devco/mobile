/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useCallback} from 'react';
import SvgIcon from '../components/SvgIcon';
import BottomSheet, {BottomSheetRefProps} from '../components/BottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MySelect = () => {
  const [visible, setVisible] = React.useState(false);
  const bottomSheetRef = React.useRef<BottomSheetRefProps>(null);

  const openBottomSheet = useCallback(() => {
    const isActive = bottomSheetRef.current?.isActive();
    if (isActive) {
      bottomSheetRef.current?.scrollTo(0);
    } else {
      bottomSheetRef.current?.scrollTo(-200);
    }
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => {
        openBottomSheet();
      }}>
      <View style={styles.contentWraped}>
        <Text>My select</Text>
      </View>
      <View style={styles.icon}>
        <SvgIcon iconName="arrowDown" w={10} h={10} />
      </View>
    </TouchableOpacity>
  );
};

export default MySelect;

const styles = StyleSheet.create({
  container: {
    height: 37,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#C5C5C5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentWraped: {
    flex: 97,
  },
  icon: {
    flex: 3,
  },
  modalContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
  },
});
