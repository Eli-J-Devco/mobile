/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import {icons, images} from '../../assets';
import MyTextInput from '../../common/base/MyTextInput';
import Dashboard from '../../modules/dashboard';
import useThemeContext from '../../hooks/useThemeContext';

const DATA = [
  {
    icon: icons.dashboard,
    name: 'Dashboard',
    sreen: 'PortfolioNavigation',
  },
  {
    icon: icons.bag,
    name: 'Portfolio',
    sreen: 'PortfolioNavigation',
  },
  {
    icon: icons.bell,
    name: 'Alerts',
    sreen: 'AlertsNavigation',
  },
  {
    icon: icons.chart,
    name: 'Reports',
    sreen: 'PortfolioNavigation',
  },
  {
    icon: icons.map,
    name: 'Map',
    sreen: 'PortfolioNavigation',
  },
];

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const theme = useThemeContext();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <ImageBackground
        resizeMode="cover"
        source={images.bgLogin}
        style={styles.image}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <MyTextInput
              style={[styles.searchInput, {color: theme.palette.text.primary}]}
              placeholder="Search"
            />
            <View style={styles.headerBtnContainer}>
              <TouchableOpacity activeOpacity={0.5} style={styles.headerBtn}>
                <WithLocalSvg asset={icons.bellWhite} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.headerBtn}>
                <WithLocalSvg asset={icons.user} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.action}>
            <View style={styles.actionContent}>
              {DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={item.name}
                    style={styles.actionItem}
                    onPress={() => {
                      navigation.navigate(item.sreen);
                    }}>
                    <View style={styles.actionIcon}>
                      <WithLocalSvg asset={item.icon} />
                    </View>
                    <Text style={styles.actionLable}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Dashboard />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 2,
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    flex: 6,
    paddingTop: 50,
  },
  header: {
    flex: 2,
    backgroundColor: 'tranperant',
    width: '100%',
    position: 'relative',
  },
  action: {
    position: 'absolute',
    width: '100%',
    height: 80,
    display: 'flex',
    paddingHorizontal: 24,
    bottom: -40,
    zIndex: 1,
  },
  actionContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    // boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
    shadowColor: '#333',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
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
    color: '#000000',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    width: '100%',
    flex: 1,
    gap: 16,
  },
  searchInput: {
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    flex: 4,
    height: 37,
  },
  headerBtnContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
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
});
