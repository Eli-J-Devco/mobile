/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import {icons, images} from '../assets';
import MyTextInput from '../common/base/MyTextInput';
import useThemeContext from '../hooks/useThemeContext';
import {
  dashboardRouteNames,
  devicesRouteNames,
} from '../navigations/router-name';
import {mainLayoutStyles as styles} from './main-layout.styles';

const DATA = [
  {
    icon: icons.dashboard,
    name: 'Dashboard',
    sreen: 'PortfolioNavigation',
  },
  {
    icon: icons.bag,
    name: 'Portfolio',
    sreen: 'Portfolio',
  },
  {
    icon: icons.bell,
    name: 'Alerts',
    sreen: 'Alerts',
  },
  {
    icon: icons.chart,
    name: 'Reports',
    sreen: 'PortfolioNavigation',
  },
  {
    icon: icons.map,
    name: 'Map',
    sreen: 'Map',
  },
  {
    icon: icons.overview,
    name: 'OverView',
    sreen: dashboardRouteNames.SiteOverView,
  },
  {
    icon: icons.devices,
    name: 'Devices',
    sreen: devicesRouteNames.Devinavigation,
  },
];

interface Props {
  backgroundColor?: string;
  children: React.ReactNode;
}

const MainLayout = ({backgroundColor, children}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const theme = useThemeContext();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor={'transparent'}
        />
        <View style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            source={images.bgLogin}
            style={[styles.header, styles.image]}>
            <View style={styles.headerContent}>
              <MyTextInput
                style={[
                  styles.searchInput,
                  {color: theme.palette.text.primary},
                ]}
                placeholder="Search"
                onFocus={() => {
                  navigation.navigate(dashboardRouteNames.SearchAndFilter);
                }}
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
              <View style={[styles.actionContainer]}>
                <View
                  style={[
                    styles.actionContent,
                    {backgroundColor: theme.palette.background.primary},
                  ]}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({item}: {item: any}) => (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        key={item.name}
                        style={[styles.actionItem, {marginRight: 30}]}
                        onPress={() => {
                          navigation.navigate(item.sreen);
                        }}>
                        <View style={styles.actionIcon}>
                          <WithLocalSvg
                            width={20}
                            height={20}
                            asset={item.icon}
                          />
                        </View>
                        <Text style={styles.actionLable}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item: any, index: number) =>
                      `id-silder-${item.name}`
                    }
                    horizontal={true}
                  />
                </View>
              </View>
              {/* <View style={[styles.actionContainer]}>
                <View
                  style={[
                    styles.actionContent,
                    {backgroundColor: theme.palette.background.primary},
                  ]}>
                  <View
                    style={{
                      flex: 90,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      //   backgroundColor: 'red',
                    }}>
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
                            <WithLocalSvg
                              width={20}
                              height={20}
                              asset={item.icon}
                            />
                          </View>
                          <Text style={styles.actionLable}>{item.name}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <View style={styles.silderContainer}>
                    <View style={styles.silder}>
                      <View style={styles.silderItem} />
                      <View style={styles.silderItem} />
                    </View>
                  </View>
                </View>
              </View> */}
            </View>
          </ImageBackground>
          <View
            style={[
              styles.content,
              {backgroundColor: theme.palette.background.secondary},
              {
                backgroundColor: backgroundColor ? backgroundColor : '',
              },
            ]}>
            {children}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainLayout;
