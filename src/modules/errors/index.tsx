/* eslint-disable no-magic-numbers */
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import MyTouchableOpacity from '../../common/base/MyTouchableOpacity';
import IconImage from '../../common/components/icons/IconImage';
import useThemeContext from '../../hooks/useThemeContext';
import CreateError from './components/CreateError';
import ErrorItem from './components/ErrorItem';
import SearchInput from '../../common/components/input/SearchInput';

const {width, height} = Dimensions.get('window');

const Errors = () => {
  const theme = useThemeContext();

  const [openModal, setOpenModal] = useState(false);

  const pan = useRef(
    new Animated.ValueXY({
      x: width - 80,
      y: height - 250,
    }),
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),

      onPanResponderRelease() {
        pan.extractOffset();
      },
    }),
  ).current;

  // const textStyle: TextStyle = useMemo(
  //   () => ({
  //     color: theme.palette.text.primary,
  //     fontSize: theme.font.size.xs,
  //     fontWeight: '400',
  //   }),
  //   [],
  // );

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CreateError open={openModal} mode="create" onCancel={onCancel} />
      <View style={styles.container}>
        <View style={[styles.flexRow, styles.fillter]}>
          <View style={[styles.flexRow, styles.gap4]}>
            <MyTouchableOpacity
              touchableOpacityStyle={{
                ...styles.btn,
                ...styles.flexRow,
                borderColor: theme.palette.borderColor.base,
              }}>
              <IconImage iconName="filter" size={16} />
            </MyTouchableOpacity>
            <SearchInput />
          </View>
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.flexRow,
              ...styles.btn,
              borderColor: theme.palette.borderColor.base,
            }}>
            <IconImage iconName="upload" size={14} />
          </MyTouchableOpacity>
        </View>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.btnWrapped]}>
          <TouchableOpacity
            onPress={() => {
              setOpenModal(true);
            }}
            activeOpacity={0.5}
            style={[
              styles.btnCreate,
              {backgroundColor: theme.palette.background.yellow},
            ]}>
            <IconImage iconName="plus" />
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.content}>
          <ErrorItem />
        </View>
      </View>
    </>
  );
};

export default Errors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCreate: {
    height: 48,
    width: 48,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapped: {
    position: 'absolute',
    zIndex: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap4: {
    gap: 4,
  },
  fillter: {
    justifyContent: 'space-between',
    backgroundColor: '#fff', 
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  btn: {
    gap: 4,
    borderWidth: 1,
    borderRadius: 8,
    width: 32, 
    height:32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#fff'
  },
  content: {
    marginTop: 16,
    paddingHorizontal: 16
  },
});
