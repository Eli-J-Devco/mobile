/* eslint-disable react-native/no-inline-styles */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  Platform,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../assets';
import {SCROLL_INPUT} from '../constants/animated/inputRange';
import {MULTIPLIER, SCROLL_OUTPUT} from '../constants/animated/outputRange';
import useAppContext from '../hooks/useAppContext';
import {useNavigation} from '../hooks/useNavigation';
import HeaderMainLayout from './components/HeaderMainLayout';
import Menu from './components/Menu';

const {width} = Dimensions.get('window');

const UPPER_HEADER_ANDROID_PADDING_TOP = 24;
  const UPPER_HEADER_IOS_PADDING_TOP = 0;

const UPPER_HEADER_HEIGHT = 30;
const UPPER_HEADER_PADDING_TOP =
  Platform.OS === 'android'
    ? UPPER_HEADER_ANDROID_PADDING_TOP
    : UPPER_HEADER_IOS_PADDING_TOP;
const LOWER_HEADER_HEIGHT = 80;
const ACTION_CONTAINER_HEIGHT = 90;
const ACTION_CONTAINER_PADDING_HORIZONTAL = 16;
const ACTION_CONTAINER_MAGIN_TOP = 12;
const COMPENSATION_FACTOR = {
  6: 6,
  16: 16,
  32: 32,
};

const HEIGHT_OUTPUT =
  Platform.OS === 'android'
    ? LOWER_HEADER_HEIGHT * MULTIPLIER.OnePointFour + UPPER_HEADER_ANDROID_PADDING_TOP
    : LOWER_HEADER_HEIGHT * MULTIPLIER.OnePointFour + COMPENSATION_FACTOR[16];
const PADDING_OUTPUT =
  Platform.OS === 'android'
    ? LOWER_HEADER_HEIGHT / MULTIPLIER.TowAndAhrlf + UPPER_HEADER_ANDROID_PADDING_TOP
    : LOWER_HEADER_HEIGHT / MULTIPLIER.TowAndAhrlf + COMPENSATION_FACTOR[16];
const HEIGHT_BEHIND =
  Platform.OS === 'android'
    ? UPPER_HEADER_HEIGHT +
      ACTION_CONTAINER_HEIGHT +
      ACTION_CONTAINER_MAGIN_TOP
    : UPPER_HEADER_HEIGHT +
      ACTION_CONTAINER_HEIGHT +
      ACTION_CONTAINER_MAGIN_TOP +
      UPPER_HEADER_PADDING_TOP +
      COMPENSATION_FACTOR[16];

interface Props {
  backgroundColor?: string;
  children: React.ReactNode;
}

const MainLayout = ({backgroundColor, children}: Props) => {
  // const theme = useThemeContext();
  const insets = useSafeAreaInsets();

  const {isAuth} = useAppContext();
  const navigation = useNavigation();

  // const parent = navigation.getParent();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [refreshing, setRefreshing] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef<ScrollView>(null);

  const lowerHeaderAnimation = {
    height: animatedValue.interpolate({
      inputRange: [0, SCROLL_INPUT[100]],
      outputRange: [
        LOWER_HEADER_HEIGHT / MULTIPLIER.OneAndAhalf,
        LOWER_HEADER_HEIGHT / MULTIPLIER.OneAndAhalf - COMPENSATION_FACTOR[16],
      ],
      extrapolate: 'clamp',
    }),
  };

  const actionAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [
            0,
            SCROLL_INPUT[50],
            SCROLL_INPUT[70],
            SCROLL_INPUT[100],
          ],
          outputRange: [
            0,
            -UPPER_HEADER_HEIGHT + ACTION_CONTAINER_MAGIN_TOP,
            -(
              UPPER_HEADER_HEIGHT +
              ACTION_CONTAINER_MAGIN_TOP +
              UPPER_HEADER_PADDING_TOP
            ),
            -(
              UPPER_HEADER_HEIGHT +
              insets.top +
              ACTION_CONTAINER_MAGIN_TOP +
              UPPER_HEADER_PADDING_TOP
            ),
          ],
          extrapolate: 'clamp',
        }),
      },
      // {
      //   translateX: animatedValue.interpolate({
      //     inputRange: [0, 100],
      //     outputRange: [0, -60],
      //     extrapolate: 'clamp',
      //   }),
      // },
    ],
    height: animatedValue.interpolate({
      inputRange: [0, SCROLL_INPUT[100]],
      outputRange: [LOWER_HEADER_HEIGHT, HEIGHT_OUTPUT],
      extrapolate: 'clamp',
    }),
    width: animatedValue.interpolate({
      inputRange: [0, SCROLL_INPUT[50], SCROLL_INPUT[80], SCROLL_INPUT[100]],
      outputRange: [
        width - ACTION_CONTAINER_PADDING_HORIZONTAL * MULTIPLIER.Two,
        width - ACTION_CONTAINER_PADDING_HORIZONTAL - COMPENSATION_FACTOR[6],
        width - ACTION_CONTAINER_PADDING_HORIZONTAL,
        width,
      ],
      extrapolate: 'clamp',
    }),
    left: animatedValue.interpolate({
      inputRange: [0, SCROLL_INPUT[80], SCROLL_INPUT[100]],
      outputRange: [
        ACTION_CONTAINER_PADDING_HORIZONTAL,
        ACTION_CONTAINER_PADDING_HORIZONTAL / MULTIPLIER.Two,
        0,
      ],
      extrapolate: 'clamp',
    }),
    paddingTop: animatedValue.interpolate({
      inputRange: [0, SCROLL_INPUT[50], SCROLL_INPUT[100]],
      outputRange: [0, LOWER_HEADER_HEIGHT / MULTIPLIER.Three, PADDING_OUTPUT],
      extrapolate: 'clamp',
    }),
    borderRadius: animatedValue.interpolate({
      inputRange: [0, SCROLL_INPUT[100]],
      outputRange: [SCROLL_OUTPUT[8], 0],
      extrapolate: 'clamp',
    }),
  };

  if (!isAuth) {
    // console.log('no authen');
    navigation.replace('Login');

    return;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <ImageBackground
        source={images.bgHeader}
        style={[
          styles.header,
          {
            paddingTop: insets.top,
          },
        ]}>
        <View style={styles.upperHeader}>
          <HeaderMainLayout animatedValue={animatedValue} />
        </View>

        <Animated.View style={[styles.lowerHeader, lowerHeaderAnimation]}>
          <Animated.View
            style={[
              {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
                shadowColor: '#333',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 20,
                position: 'absolute',
                top: ACTION_CONTAINER_MAGIN_TOP,
                zIndex: 10,
                alignItems: 'center',
                paddingHorizontal:
                  ACTION_CONTAINER_PADDING_HORIZONTAL / MULTIPLIER.Two,
              },
              actionAnimation,
            ]}>
            <Menu animatedValue={animatedValue} />
          </Animated.View>
        </Animated.View>
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;

          // const dif = offsetY - lastOffsetY.current;

          // if (offsetY === 0) {
          //   parent?.setOptions({
          //     tabBarStyle: {
          //       display: 'flex',
          //       backgroundColor: '#DCDCDC',
          //       height: 65,
          //       animated: true,
          //       duration: 5000,
          //     },
          //   });
          // }
          // if (Math.abs(dif) <= 3) {
          //   return;
          // } else if (dif <= 0) {
          //   parent?.setOptions({
          //     tabBarStyle: {
          //       display: 'flex',
          //       height: 65,
          //       backgroundColor: '#DCDCDC',
          //       animated: true,
          //       duration: 5000,
          //     },
          //   });
          // } else {
          //   parent?.setOptions({
          //     tabBarStyle: {display: 'none', animated: true},
          //   });
          // }
          // lastOffsetY.current = offsetY;

          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          // console.log('----->', scrollDirection.current);
          // if (scrollDirection.current === 1) {
          //   scrollViewRef.current?.scrollTo({
          //     y: 100,
          //     animated: true,
          //   });
          // }
        }}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            progressViewOffset={
              Platform.OS === 'android'
                ? ACTION_CONTAINER_HEIGHT +
                  ACTION_CONTAINER_MAGIN_TOP +
                  LOWER_HEADER_HEIGHT -
                  insets.top
                : COMPENSATION_FACTOR[32]
            }
            refreshing={refreshing}
            onRefresh={() => {}}
            tintColor="red"
          />
        }>
        <View
          style={{
            height: HEIGHT_BEHIND,
            backgroundColor: backgroundColor ? backgroundColor : '#F5F5F5',
          }}
        />

        <View
          style={[
            styles.scrollViewContainer,
            {
              backgroundColor: backgroundColor ? backgroundColor : '#F5F5F5',
            },
          ]}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ACTION_CONTAINER_HEIGHT / MULTIPLIER.Two,
  },
  header: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  scrollViewContainer: {
    height: 'auto',
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    // marginTop: UPPER_HEADER_PADDING_TOP,
    gap: 8,
  },
  lowerHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ACTION_CONTAINER_PADDING_HORIZONTAL,
    justifyContent: 'space-between',
  },
});
