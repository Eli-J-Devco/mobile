/* eslint-disable react-native/no-inline-styles */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
import React, {
  Fragment,
  memo,
  useCallback,
  // useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  DimensionValue,
  FlatList,
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconImage from '../../common/components/icons/IconImage';
import {useNavigation} from '../../hooks/useNavigation';
import {
  alertRouteNames,
  dashboardRouteNames,
  devicesRouteNames,
  portfolioRouteName,
  reportsRouteNames,
} from '../../navigations/router-name';
// import {useRoute} from '../../hooks/useRote';

type DataTypes = {
  icon: IconNameType;
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

const SCROLL_ELEMENT_WIDTH_PERCENT = 50;
const SCROLL_INDICATOR_WIDTH = 100;
const UPPER_LIMIT = 10;
const HEIGHT_INDICATOR = 4;
const MAGIN_RIGHT = 28;

interface MenuProps {
  animatedValue: Animated.Value;
}

// const intersect = (arr1: string[], arr2: DataTypes[]) => {
//   const set1 = new Set(arr1);

//   return arr2.filter(item => set1.has(item.name));
// };

const Menu = ({animatedValue}: MenuProps) => {
  const navigation = useNavigation();
  // const router = useRoute<DashboardStackParamList>();
  const flastListRef = useRef<FlatList<DataTypes>>(null);
  const [scrollOffsetX, setScrollOffsetX] = useState(0);
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [contentOffset, setContentOffset] = useState({x: 0, y: 0});
  // const [params, setParams] = useState<string[]>([]);

  const scrollPerc = useMemo(() => {
    return Math.abs(
      Number(
        (contentOffset.x / (contentSize - scrollViewWidth)) *
          (SCROLL_INDICATOR_WIDTH - SCROLL_ELEMENT_WIDTH_PERCENT) || 0,
      ),
    ).toFixed(0);
  }, [contentOffset, contentSize, scrollViewWidth]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (
        _: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        const newOffsetX = scrollOffsetX - gestureState.dx;

        if (flastListRef.current) {
          flastListRef.current.scrollToOffset({
            offset: newOffsetX,
            animated: false,
          });
        }
      },
      onPanResponderRelease: (
        _: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        setScrollOffsetX(scrollOffsetX - gestureState.dx);
      },
    }),
  ).current;

  const scrollIndicator = {
    height: animatedValue.interpolate({
      inputRange: [0, UPPER_LIMIT],
      outputRange: [HEIGHT_INDICATOR, 0],
      extrapolate: 'clamp',
    }),
    marginBottom: animatedValue.interpolate({
      inputRange: [0, UPPER_LIMIT],
      outputRange: [HEIGHT_INDICATOR, 0],
      extrapolate: 'clamp',
    }),
    opacity: animatedValue.interpolate({
      inputRange: [0, UPPER_LIMIT],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setScrollViewWidth(e.nativeEvent.layout.width);
  }, []);

  const onContentSizeChange = useCallback((width: number) => {
    setContentSize(width);
  }, []);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      setScrollOffsetX(event.nativeEvent.contentOffset.x);
      setContentOffset(event.nativeEvent.contentOffset);
    },
    [],
  );

  // useEffect(() => {
  //   if (router.params) {
  //     const team = router.params?.types;

  //     setParams(team as string[]);
  //   } else {
  //     setParams([]);
  //   }
  // }, [router.params]);

  return (
    <Fragment>
      <FlatList
        ref={flastListRef}
        {...panResponder.panHandlers}
        onScroll={onScroll}
        onContentSizeChange={onContentSizeChange}
        onLayout={onLayout}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item, index}: {item: DataTypes; index: number}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              styles.actionItem,
              {
                marginRight: index === DATA.length - 1 ? 0 : MAGIN_RIGHT,
              },
            ]}
            onPress={() => {
              navigation.navigate(item.sreen);
            }}>
            <View style={styles.actionIcon}>
              <IconImage iconName={item.icon} />
            </View>
            <Text style={styles.actionLable}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item: DataTypes) => `id-silder-${item.name}`}
        horizontal={true}
      />
      <Animated.View
        style={[
          {
            width: 80,
            backgroundColor: '#E6EFFC',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 2,
            position: 'relative',
          },
          scrollIndicator,
        ]}>
        <View
          style={{
            position: 'absolute',
            left: `${scrollPerc}%` as DimensionValue,
            width: `${SCROLL_ELEMENT_WIDTH_PERCENT}%`,
            backgroundColor: '#373433',
            height: 4,
            borderRadius: 2,
          }}
        />
      </Animated.View>
    </Fragment>
  );
};

export default memo(Menu);

const styles = StyleSheet.create({
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
