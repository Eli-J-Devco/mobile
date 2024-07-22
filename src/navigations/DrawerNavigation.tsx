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
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {images} from '../assets';
import IconImage from '../common/components/icons/IconImage';
import SvgIcon from '../common/components/SvgIcon';
import BottomNavigation from './BottomNavigation';

const {width, height} = Dimensions.get('window');

function CustomDrawerContent(props: any) {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [-100, 0]);

    return {
      transform: [{translateX}],
    };
  });

  return (
    <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
      <SafeAreaView
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: height,
        }}>
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 'auto',
            paddingBottom: 16,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              fontWeight: '700',
            }}>
            Version 1.0
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              fontWeight: '400',
            }}>
            Powered by Next Wave Energy Monitoring, Inc.
          </Text>
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="BottomNavigation"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#373433',
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
        },
      }}>
      <Drawer.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused, size}) => <IconImage iconName="home" />,
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
