/* eslint-disable no-magic-numbers */
import React, {useMemo, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import MyScrollView from '../../common/base/MyScrollView';
import MyTouchableOpacity from '../../common/base/MyTouchableOpacity';
import IconImage from '../../common/components/icons/IconImage';
import useThemeContext from '../../hooks/useThemeContext';
import CreateError from './components/CreateError';
import ErrorItem from './components/ErrorItem';

const {width, height} = Dimensions.get('window');

const Errors = () => {
  const theme = useThemeContext();

  const widthAnim = useRef(new Animated.Value(80)).current;

  const [openModal, setOpenModal] = useState(false);

  const handleFocus = () => {
    Animated.timing(widthAnim, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(widthAnim, {
      toValue: 80,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

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

  const textStyle: TextStyle = useMemo(
    () => ({
      color: theme.palette.text.primary,
      fontSize: theme.font.size.xs,
      fontWeight: '400',
    }),
    [],
  );

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <MyScrollView>
      <CreateError open={openModal} mode="create" onCancel={onCancel} />
      <View style={styles.container}>
        <View style={[styles.flexRow, styles.fillter]}>
          <View style={[styles.flexRow, styles.gap4]}>
            <MyTouchableOpacity
              touchableOpacityStyle={{
                ...styles.btnFillter,
                ...styles.flexRow,
                borderColor: theme.palette.borderColor.base,
              }}>
              <IconImage iconName="filter" size={16} />
              <Text style={textStyle}>Fillter</Text>
            </MyTouchableOpacity>
            <Animated.View
              style={[
                styles.searchContainer,
                {borderColor: theme.palette.borderColor.base, width: widthAnim},
              ]}>
              <View
                style={[
                  styles.searchIcon,
                  {backgroundColor: theme.palette.background.dark},
                ]}>
                <IconImage iconName="searchWhite" size={20} />
              </View>
              <TextInput style={styles.input} placeholder="Search..." onFocus={handleFocus} onBlur={handleBlur} />
            </Animated.View>
          </View>
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.flexRow,
              ...styles.btnFillter,
              borderColor: theme.palette.borderColor.base,
            }}>
            <IconImage iconName="upload" size={14} />
            <Text style={textStyle}>Export</Text>
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
    </MyScrollView>
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
  },
  btnFillter: {
    gap: 4,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  content: {
    marginTop: 16,
  },
  searchIcon: {
    height: 24,
    width: 30,
    borderTopLeftRadius: 24,
    // borderTopRightRadius: 8,
    borderBottomLeftRadius: 24,
    // borderBottomRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    borderRadius: 26,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  input: {
    // minWidth: 48,
    height: 24,
    fontSize: 12,
    width: 'auto'
  },
});
