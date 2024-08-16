/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../assets';
import useAppContext from '../hooks/useAppContext';
import HeaderMainLayout from './components/HeaderMainLayout';
import Menu from './components/Menu';
import {useNavigation} from '../hooks/useNavigation';

const {width} = Dimensions.get('window');

const UPPER_HEADER_HEIGHT = 30;
const UPPER_HEADER_PADDING_TOP = 8;
const LOWER_HEADER_HEIGHT = 80;
const ACTION_CONTAINER_HEIGHT = 90;
const ACTION_CONTAINER_PADDING_HORIZONTAL = 16;
const ACTION_CONTAINER_MAGIN_TOP = 12;

interface Props {
  backgroundColor?: string;
  children: React.ReactNode;
}

const MainLayout = ({backgroundColor, children}: Props) => {
  // const theme = useThemeContext();

  const {isAuth} = useAppContext();
  const navigation = useNavigation();

  // const parent = navigation.getParent();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [refreshing, setRefreshing] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef<ScrollView>(null);

  const lowerHeaderAnimation = {
    height: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [LOWER_HEADER_HEIGHT / 1.5, LOWER_HEADER_HEIGHT / 1.5 - 16],
      extrapolate: 'clamp',
    }),
  };

  const actionAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50, 70, 100],
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
              (StatusBar.currentHeight ? StatusBar.currentHeight : 0) +
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
      inputRange: [0, 100],
      outputRange: [LOWER_HEADER_HEIGHT, LOWER_HEADER_HEIGHT * 1.4],
      extrapolate: 'clamp',
    }),
    width: animatedValue.interpolate({
      inputRange: [0, 50, 80, 100],
      outputRange: [
        width - ACTION_CONTAINER_PADDING_HORIZONTAL * 2,
        width - ACTION_CONTAINER_PADDING_HORIZONTAL - 6,
        width - ACTION_CONTAINER_PADDING_HORIZONTAL,
        width,
      ],
      extrapolate: 'clamp',
    }),
    left: animatedValue.interpolate({
      inputRange: [0, 80, 100],
      outputRange: [
        ACTION_CONTAINER_PADDING_HORIZONTAL,
        ACTION_CONTAINER_PADDING_HORIZONTAL / 2,
        0,
      ],
      extrapolate: 'clamp',
    }),
    paddingTop: animatedValue.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, LOWER_HEADER_HEIGHT / 3, LOWER_HEADER_HEIGHT / 2.5],
      extrapolate: 'clamp',
    }),
    borderRadius: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [8, 0],
      extrapolate: 'clamp',
    }),
  };

  if (!isAuth) {
    // console.log('no authen');
    navigation.replace('Login');

    return;
  }

  return (
    <SafeAreaView style={styles.container}>
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
            paddingTop: StatusBar.currentHeight,
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
                paddingHorizontal: ACTION_CONTAINER_PADDING_HORIZONTAL / 2,
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
              StatusBar.currentHeight
                ? ACTION_CONTAINER_HEIGHT +
                  ACTION_CONTAINER_MAGIN_TOP +
                  LOWER_HEADER_HEIGHT -
                  StatusBar.currentHeight
                : ACTION_CONTAINER_HEIGHT +
                  ACTION_CONTAINER_MAGIN_TOP +
                  LOWER_HEADER_HEIGHT
            }
            refreshing={refreshing}
            onRefresh={() => {}}
          />
        }>
        <View
          style={{
            height:
              UPPER_HEADER_HEIGHT +
              ACTION_CONTAINER_HEIGHT +
              ACTION_CONTAINER_MAGIN_TOP +
              UPPER_HEADER_PADDING_TOP,
            backgroundColor: backgroundColor ? backgroundColor : '#F5F5F5',
          }}
        />

        <View
          style={[
            {
              // paddingTop:
              //   ACTION_CONTAINER_HEIGHT / 2 + ACTION_CONTAINER_MAGIN_TOP + 16,
              // paddingBottom: 16,
            },
            styles.scrollViewContainer,
            {
              backgroundColor: backgroundColor ? backgroundColor : '#F5F5F5',
            },
          ]}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: UPPER_HEADER_PADDING_TOP,
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
