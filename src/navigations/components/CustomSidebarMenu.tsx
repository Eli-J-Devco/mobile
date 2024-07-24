/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {images} from '../../assets';
import CustomDrawerItem from './CustomDrawerItem';
import DrawerItemTree from './DrawerItemTree';
import ModalConfirm from '../../common/components/modal/ModalConfirm';
import CustomerOrAccount from './CustomerOrAccount';

const CustomSidebarMenu = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalConfirm
        title="Do you want to log out?"
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        onOk={() => {
          setModalVisible(false);
          props?.navigation?.replace('Login');
        }}
      />
      <View style={styles.imageContainer}>
        <Image source={images.drawerHearBg} style={styles.headerImage} />
        <Image source={images.logo} style={styles.logoImage} />
      </View>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: 0,
        }}
        {...props}>
        <DrawerItemList {...props} />
        <CustomDrawerItem label="Alerts" iconName="bell" />
        <DrawerItemTree />
        <CustomDrawerItem label="Map" iconName="map" />
        <CustomDrawerItem label="Report" iconName="chart" />
        <CustomDrawerItem label="Customer/Account" iconName="userBlack" />
        <CustomerOrAccount />

        <View style={styles.bottomNav}>
          <CustomDrawerItem label="Support" iconName="support" />
          <CustomDrawerItem
            label="Logout"
            iconName="logout"
            onPress={() => {
              setModalVisible(true);
              props?.navigation?.closeDrawer();
            }}
          />
        </View>
      </DrawerContentScrollView>
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
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 80,
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bottomNav: {
    borderTopColor: '#EDEDED',
    borderTopWidth: 1,
  },
});

export default CustomSidebarMenu;
