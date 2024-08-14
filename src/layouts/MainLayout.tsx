/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-native/no-inline-styles */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ImageBackground,
  PanResponder,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../assets';
import IconImage from '../common/components/icons/IconImage';
import useAppContext from '../hooks/useAppContext';
import {
  alertRouteNames,
  dashboardRouteNames,
  devicesRouteNames,
  portfolioRouteName,
  reportsRouteNames,
} from '../navigations/router-name';

const {width} = Dimensions.get('window');

type DataTypes = {
  icon: string;
  name: string;
  sreen: string;
};

const DATA: DataTypes[] = [
  {
    icon: 'dashboard',
    name: 'Dashboard',
    sreen: dashboardRouteNames.Dashboard,
  },
  {
    icon: 'bag',
    name: 'Portfolio',
    sreen: portfolioRouteName.PortfolioNavigation,
  },
  {
    icon: 'bell',
    name: 'Alerts',
    sreen: alertRouteNames.AlertsNavigation,
  },
  {
    icon: 'chart',
    name: 'Reports',
    sreen: reportsRouteNames.ReportsNavigation,
  },
  {
    icon: 'map',
    name: 'Map',
    sreen: 'Map',
  },
  {
    icon: 'overview',
    name: 'OverView',
    sreen: dashboardRouteNames.SiteOverView,
  },
  {
    icon: 'devices',
    name: 'Devices',
    sreen: devicesRouteNames.Devinavigation,
  },
];

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

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

function intersect(arr1: string[], arr2: DataTypes[]) {
  const set1 = new Set(arr1);

  return arr2.filter(item => set1.has(item.name));
}

const MainLayout = ({backgroundColor, children}: Props) => {
  // const theme = useThemeContext();
  const router = useRoute<any>();
  const {isAuth} = useAppContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();

  // const parent = navigation.getParent();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [refreshing, setRefreshing] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef<ScrollView>(null);
  // const lastOffsetY = useRef(0);
  // const scrollDirection = useRef(0);

  const [params, setParams] = useState<string[]>([]);

  useEffect(() => {
    // console.log('parent', parent);
    if (router.params) {
      const team = router.params?.types;

      setParams(team as string[]);
    } else {
      setParams([]);
    }
  }, [router.params]);

  const searchInputAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 15, 30, 50, 70, 100],
          outputRange: [0, -10, -20, -40, -60, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 15, 30, 50, 70, 100],
      outputRange: [1, 0.8, 0.6, 0.4, 0.2, 0],
      extrapolate: 'clamp',
    }),
  };

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

  const flastListRef = useRef<any>(null);
  const [scrollOffsetX, setScrollOffsetX] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e: any, gestureState: any) => {
        const newOffsetX = scrollOffsetX - gestureState.dx;

        if (flastListRef.current) {
          flastListRef.current?.scrollToOffset({
            offset: newOffsetX,
            animated: false,
          });
        }
      },
      onPanResponderRelease: (e: any, gestureState: any) => {
        setScrollOffsetX(scrollOffsetX - gestureState.dx);
      },
    }),
  ).current;

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
          <TouchableOpacityAnimated
            activeOpacity={0.5}
            onPress={() => {
              navigation.openDrawer();
            }}
            style={[
              styles.headerBtn,
              {backgroundColor: 'transparent'},
              searchInputAnimation,
            ]}>
            <IconImage size={28} iconName="navMenuWhite" />
          </TouchableOpacityAnimated>

          <TouchableOpacityAnimated
            activeOpacity={0.5}
            style={[styles.searchInput, searchInputAnimation]}
            onPress={() =>
              navigation.navigate(dashboardRouteNames.SearchAndFilter)
            }>
            <IconImage size={20} iconName="search" />
            <TextInput
              editable={false}
              style={styles.input}
              placeholder="Search"
            />
          </TouchableOpacityAnimated>

          <TouchableOpacityAnimated
            onPress={() => {
              navigation.navigate(dashboardRouteNames.Notify);
            }}
            style={[styles.headerBtn, searchInputAnimation]}>
            <IconImage size={20} iconName="bellWhite" />
          </TouchableOpacityAnimated>
          <TouchableOpacityAnimated
            style={[styles.headerBtn, searchInputAnimation]}>
            <IconImage size={20} iconName="user" />
          </TouchableOpacityAnimated>
        </View>

        <Animated.View style={[styles.lowerHeader, lowerHeaderAnimation]}>
          <Animated.View
            style={[
              {
                display: 'flex',
                flexDirection: 'row',
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
            <FlatList
              ref={flastListRef}
              {...panResponder.panHandlers}
              onScroll={event => {
                setScrollOffsetX(event.nativeEvent.contentOffset.x);
              }}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              data={params?.length > 0 ? intersect(params, DATA) : DATA}
              renderItem={({item, index}: {item: any; index: number}) => (
                <TouchableOpacityAnimated
                  activeOpacity={0.5}
                  style={[
                    styles.actionItem,
                    {
                      marginRight: index === DATA.length - 1 ? 0 : 28,
                    },
                  ]}
                  onPress={() => {
                    navigation.navigate(item.sreen);
                  }}>
                  <View style={styles.actionIcon}>
                    <IconImage iconName={item.icon} />
                  </View>
                  <Text style={styles.actionLable}>{item.name}</Text>
                </TouchableOpacityAnimated>
              )}
              keyExtractor={(item: any) => `id-silder-${item.name}`}
              horizontal={true}
            />
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
        contentContainerStyle={
          {
            // paddingBottom: 16,
          }
        }
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
  headerBtn: {
    height: 37,
    width: 37,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
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
  searchInput: {
    flex: 1,
    backgroundColor: '#E8E4E4',
    color: '#000',
    borderRadius: 20,
    paddingLeft: 8,
    height: 37,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    color: '#000',
    height: 37,
    textAlignVertical: 'center',
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    height: '100%',
  },
  actionIcon: {
    backgroundColor: '#E6EFFC',
    borderRadius: 8,
    height: 37,
    width: 37,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLable: {
    fontSize: 12,
    color: '#000',
  },
});
