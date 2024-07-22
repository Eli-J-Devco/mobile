/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../assets';
import SvgIcon from '../common/components/SvgIcon';
import useThemeContext from '../hooks/useThemeContext';
import {
  alertRouteNames,
  dashboardRouteNames,
  devicesRouteNames,
  portfolioRouteName,
  reportsRouteNames,
} from '../navigations/router-name';
import IconImage from '../common/components/icons/IconImage';

const {width, height} = Dimensions.get('window');

const DATA = [
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

const UPPER_HEADER_HEIGHT = 32;
const UPPER_HEADER_PADDING_TOP = 20;
const LOWER_HEADER_HEIGHT = 96;
const ACTION_CONTAINER_HEIGHT = 90;
const ACTION_CONTAINER_PADDING_HORIZONTAL = 16;
const ACTION_CONTAINER_MAGIN_TOP = 10;
interface Props {
  // navigation: any;
  backgroundColor?: string;
  children: React.ReactNode;
}

const TextInputAnimated = Animated.createAnimatedComponent(TextInput);
const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

const MainLayout = ({backgroundColor, children}: Props) => {
  const theme = useThemeContext();
  const navigation = useNavigation<any>();

  const animatedValue = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef(0);

  const searchInputAnimation = {
    transform: [
      // {
      //   scaleX: animatedValue.interpolate({
      //     inputRange: [0, 10, 50],
      //     outputRange: [1, 0.8, 0],
      //     extrapolate: 'clamp',
      //   }),
      // },
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

  const actionAnimation = {
    transform: [
      // {
      //   scaleX: animatedValue.interpolate({
      //     inputRange: [0, 50],
      //     outputRange: [1, 0.8],
      //     extrapolate: 'clamp',
      //   }),
      // },
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
      inputRange: [0, 50, 70, 100],
      outputRange: [
        LOWER_HEADER_HEIGHT,
        LOWER_HEADER_HEIGHT * 1.2,
        LOWER_HEADER_HEIGHT * 1.3,
        LOWER_HEADER_HEIGHT * 1.5,
      ],
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
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      {/* <View style={styles.upperHeaderPlaceholder}></View> */}
      <ImageBackground
        source={images.bgHeader}
        style={[
          styles.header,
          {
            paddingTop: StatusBar.currentHeight,
          },
        ]}>
        <View style={[styles.upperHeader]}>
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
            <IconImage iconName="search" />
            <TextInputAnimated
              editable={false}
              style={styles.input}
              placeholder="Search"
            />
          </TouchableOpacityAnimated>

          <TouchableOpacityAnimated
            onPress={() => {
              navigation.openDrawer();
            }}
            style={[styles.headerBtn, searchInputAnimation]}>
            <IconImage iconName="bellWhite" />
          </TouchableOpacityAnimated>
          <TouchableOpacityAnimated
            style={[styles.headerBtn, searchInputAnimation]}>
            <IconImage iconName="user" />
          </TouchableOpacityAnimated>
        </View>

        <View style={styles.lowerHeader}>
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
                borderRadius: 8,
                position: 'absolute',
                top: ACTION_CONTAINER_MAGIN_TOP,
                zIndex: 1,
                height: ACTION_CONTAINER_HEIGHT,
                alignItems: 'center',
                paddingHorizontal: ACTION_CONTAINER_PADDING_HORIZONTAL,
              },
              actionAnimation,
            ]}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={({item}: {item: any}) => (
                <TouchableOpacityAnimated
                  activeOpacity={0.5}
                  style={[styles.actionItem]}
                  onPress={() => {
                    navigation.navigate(item.sreen);
                  }}>
                  <Animated.View style={[styles.actionIcon]}>
                    <IconImage iconName={item.icon} />
                  </Animated.View>
                  <Animated.Text style={[styles.actionLable]}>
                    {item.name}
                  </Animated.Text>
                </TouchableOpacityAnimated>
              )}
              keyExtractor={(item: any, index: number) =>
                `id-silder-${item.name}`
              }
              horizontal={true}
            />
          </Animated.View>
        </View>
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          // scrollDirection.current = offsetY - lastOffsetY.current;
          // lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          // console.log('----->', scrollDirection.current);
          // if (scrollDirection.current > 0 && scrollDirection.current < 2) {
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
        }>
        <View
          style={{
            height: StatusBar.currentHeight
              ? 150 - StatusBar.currentHeight
              : 150,
          }}></View>
        <View
          style={[
            {
              paddingTop:
                ACTION_CONTAINER_HEIGHT / 2 + ACTION_CONTAINER_MAGIN_TOP + 16,
              // paddingBottom: 16,
            },
            styles.scrollViewContainer,
            {backgroundColor: backgroundColor ? backgroundColor : '#F5F5F5'},
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
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  header: {
    position: 'absolute',
    width: '100%',
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
    position: 'relative',
    zIndex: 2,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    position: 'relative',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#E8E4E4',
    color: '#000',
    borderRadius: 16,
    paddingLeft: 8,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    color: '#000',
  },
  bell: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginRight: 28,
  },
  actionIcon: {
    backgroundColor: '#E6EFFC',
    borderRadius: 8,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLable: {
    fontSize: 12,
    color: '#000',
  },
});
