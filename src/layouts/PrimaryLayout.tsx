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
  TextInput,
  View,
} from 'react-native';
import {images} from '../assets';
import MyTouchableOpacity from '../common/base/MyTouchableOpacity';
import IconImage from '../common/components/icons/IconImage';

interface Props {
  filter?: boolean;
  bgColor?: string;
  children: React.ReactNode;
}

const PrimaryLayout = ({
  filter = true,
  bgColor = '#F5F5F5',
  children,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <ImageBackground
        resizeMode="cover"
        source={images.bgHeader}
        style={styles.header}>
        <View style={styles.filterContainer}>
          {filter && (
            <View style={styles.headerContent}>
              <MyTouchableOpacity onPress={() => navigation.goBack()}>
                <IconImage size={20} iconName="arrowLeftWhite" />
              </MyTouchableOpacity>
              <View style={styles.searchInput}>
                <IconImage size={20} iconName="search" />
                <TextInput style={styles.input} placeholder="Search" />
              </View>
              <View style={styles.headerBtnContainer}>
                <MyTouchableOpacity touchableOpacityStyle={styles.headerBtn}>
                  <IconImage size={20} iconName="bellWhite" />
                </MyTouchableOpacity>
                <MyTouchableOpacity touchableOpacityStyle={styles.headerBtn}>
                  <IconImage size={20} iconName="user" />
                </MyTouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
      <View style={[styles.content, {backgroundColor: bgColor}]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default PrimaryLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 12,
  },
  header: {
    flex: 2,
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    gap: 8,
    // backgroundColor: 'blue',
    marginTop: 50,
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
  },
  headerBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
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
  filterContainer: {
    width: '100%',
  },
});
