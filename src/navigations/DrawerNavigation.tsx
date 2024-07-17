/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {images} from '../assets';
import SvgIcon from '../common/components/SvgIcon';
import MenuScreen from '../screens/menu';
import {dashboardRouteNames, drawerRouteName} from './router-name';
import BottomNavigation from './BottomNavigation';

function CustomDrawerContent(props: any) {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [-100, 0]);

    return {
      transform: [{translateX}],
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor={'transparent'}
        />
        <Animated.View style={styles.imageContainer}>
          <Animated.Image
            source={images.drawerHearBg}
            style={styles.headerImage}
          />
          <Animated.Image source={images.logo} style={styles.logoImage} />
        </Animated.View>
        <Animated.View style={animatedStyle}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Alerts"
            onPress={() => {}}
            icon={({focused, color, size}) => <SvgIcon iconName="bell" />}
          />
        </Animated.View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName={drawerRouteName.BottomNavigation}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'tomato',
        drawerInactiveTintColor: 'gray',
        drawerType: 'slide',
        drawerStyle: {
          width: '80%',
        },
      }}>
      <Drawer.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          drawerIcon: ({focused, size}) => <SvgIcon iconName="dashboard" />,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 50,
  },
  headerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  logoImage: {
    width: 150,
    // height: 150,
    resizeMode: 'contain',
    marginTop: -20,
    marginLeft: 10,
  },
  imageContainer: {
    marginTop: -50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
