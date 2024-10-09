/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {ReactNode, useRef, useState} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';

interface ISwipeableProps {
  leftThreshold?: number;
  rightThreshold?: number;
  dragOffsetFromLeftEdge?: number;
  dragOffsetFromRightEdge?: number;
  gap?: number;
  padding?: number;
  layout?: 'row' | 'column';
  bgColor?: string;
  renderLeftAction?: (onCloseSwipeable: () => void) => ReactNode;
  renderRightAction?: (onCloseSwipeable: () => void) => ReactNode;
  children: ReactNode;
  openLeft?: () => void;
  openRight?: () => void;
  onSwipeableOpen?: () => void;
  onSwipeableClose?: () => void;
}

const Swipeable = ({
  leftThreshold = 100,
  rightThreshold = 100,
  dragOffsetFromLeftEdge = 50,
  dragOffsetFromRightEdge = 50,
  gap = 4,
  padding = 8,
  layout = 'row',
  bgColor = '',
  renderLeftAction,
  renderRightAction,
  onSwipeableOpen,
  onSwipeableClose,
  children,
}: ISwipeableProps) => {
  const theme = useThemeContext();

  const translateX = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder(_, gestureState) {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },
      onPanResponderMove(_, gestureState) {
        // if (gestureState.dx < 0) {
        translateX.setValue(gestureState.dx);
        // }
      },
      onPanResponderRelease(_, gestureState) {
        if (gestureState.dx < -dragOffsetFromLeftEdge) {
          Animated.timing(translateX, {
            toValue: -rightThreshold,
            duration: 200,
            useNativeDriver: false,
          }).start(() => setIsOpen(true));
          if (onSwipeableOpen) onSwipeableOpen();
        } else if (gestureState.dx > dragOffsetFromRightEdge) {
          Animated.timing(translateX, {
            toValue: leftThreshold,
            duration: 200,
            useNativeDriver: false,
          }).start(() => setIsOpen(true));
          if (onSwipeableOpen) onSwipeableOpen();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: false,
          }).start(() => close());
        }
      },
    }),
  ).current;

  const onCloseSwipeable = () => {
    if (isOpen) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start(() => close());
    }
  };

  const close = () => {
    setIsOpen(false)
    if(onSwipeableClose) onSwipeableClose()
  }

  const widthRight = translateX.interpolate({
    inputRange: [-rightThreshold, 0],
    outputRange: [rightThreshold, 0],
    extrapolate: 'clamp',
  });

  const widthLeft = translateX.interpolate({
    inputRange: [0, leftThreshold],
    outputRange: [0, leftThreshold],
    extrapolate: 'clamp',
  });

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor ? bgColor : theme.palette.background.primary,
          borderBottomColor: theme.palette.borderColor.base,
        },
      ]}>
      <Animated.View style={[styles.actionLeftContainer, {width: widthRight}]}>
        {renderRightAction && renderRightAction(onCloseSwipeable)}
      </Animated.View>
      <Animated.View style={[styles.actionRightContainer, {width: widthLeft}]}>
        {renderLeftAction && renderLeftAction(onCloseSwipeable)}
      </Animated.View>
      <Animated.View
        onTouchEnd={onCloseSwipeable}
        style={[
          {
            flexDirection: layout,
            gap,
            padding,
            backgroundColor: bgColor
              ? bgColor
              : theme.palette.background.primary,
          },
          {transform: [{translateX}]},
        ]}
        {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    </View>
  );
};

export default Swipeable;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    borderBottomWidth: 1,
  },
  actionLeftContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  actionRightContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
});
