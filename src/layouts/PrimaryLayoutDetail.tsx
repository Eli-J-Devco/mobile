/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../assets';
import MyTextInput from '../common/base/MyTextInput';
import SvgIcon from '../common/components/SvgIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useThemeContext from '../hooks/useThemeContext';

interface Props {
  filter?: boolean;
  children: React.ReactNode;
}

const PrimaryLayoutDetail = ({filter = true, children}: Props) => {
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
        source={images.bgHeader}
        style={[styles.image, styles.header]}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <SvgIcon iconName="arrowLeftWhite" />
          </TouchableOpacity>
          <MyTextInput
            style={[styles.searchInput, {color: theme.palette.text.primary}]}
            placeholder="Search"
          />
          <View style={styles.headerBtnContainer}>
            <TouchableOpacity activeOpacity={0.5} style={styles.headerBtn}>
              <SvgIcon iconName="bellWhite" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.headerBtn}>
              <SvgIcon iconName="user" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default PrimaryLayoutDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.8,
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    flex: 9,
  },
  header: {
    flex: 2,
    backgroundColor: 'tranperant',
    // backgroundColor: '#F0DB2B',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    width: '100%',
    gap: 16,
    // backgroundColor: 'blue',
    marginTop: 50,
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
