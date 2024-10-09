/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {images} from '../../assets';
import ModalConfirm from '../../common/components/modal/ModalConfirm';
import useAppContext from '../../hooks/useAppContext';
import CustomDrawerItem from './CustomDrawerItem';
import CustomerOrAccount from './CustomerOrAccount';
import DrawerItemTree from './DrawerItemTree';
import {CommonActions} from '@react-navigation/native';

const CustomSidebarMenu = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {logoutFnc} = useAppContext();

  const handleLogout = () => {
    props?.navigation?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
    setModalVisible(false);

    logoutFnc();
  };

  return (
    <View style={styles.container}>
      <ModalConfirm
        title="Do you want to log out?"
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        onOk={handleLogout}
      />
      <View style={styles.imageContainer}>
        <Image source={images.drawerHearBg} style={styles.headerImage} />
        <Image source={images.logo} style={styles.logoImage} />
      </View>
      <DrawerContentScrollView
        contentContainerStyle={styles.drawerContentScrollViewStyle}
        {...props}>
        <DrawerItemList {...props} />
        <DrawerItemTree />
        <CustomDrawerItem
          label="Map"
          iconName="map"
          onPress={() => {
            props?.navigation?.navigate('Map');
            props?.navigation.closeDrawer();
          }}
        />
        <CustomDrawerItem
          label="Report"
          iconName="chart"
          onPress={() => {
            props?.navigation?.navigate('ReportsNavigation');
            props?.navigation.closeDrawer();
          }}
        />
        <CustomDrawerItem label="Customer/Account" iconName="userBlack" onPress={() => {
            props?.navigation?.navigate('CustomerOrAccount');
            props?.navigation.closeDrawer();
          }}/>
        <CustomerOrAccount {...props}/>

        <View style={styles.bottomNav}>
          <CustomDrawerItem
            label="Support"
            iconName="support"
            onPress={() => {
              props?.navigation?.navigate('Support');
              props?.navigation.closeDrawer();
            }}
          />
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
      <View style={styles.versonContainer}>
        <Text style={styles.versionText}>Version 1.0</Text>
        <Text style={styles.versionTextDes}>
          Powered by Next Wave Energy Monitoring, Inc.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  drawerContentScrollViewStyle: {
    paddingTop: 0,
  },
  versonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingBottom: 16,
  },
  versionText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
  },
  versionTextDes: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default CustomSidebarMenu;
