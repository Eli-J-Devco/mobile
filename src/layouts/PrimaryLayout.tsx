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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../assets';
import MyTextInput from '../common/base/MyTextInput';
import SvgIcon from '../common/components/SvgIcon';
import useThemeContext from '../hooks/useThemeContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import IconImage from '../common/components/icons/IconImage';
import MyTouchableOpacity from '../common/base/MyTouchableOpacity';

interface Props {
  filter?: boolean;
  children: React.ReactNode;
}

const PrimaryLayout = ({filter = true, children}: Props) => {
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
        style={[styles.header]}>
        <View style={{width: '100%'}}>
          {filter && (
            <View style={styles.headerContent}>
              <MyTouchableOpacity onPress={() => navigation.goBack()}>
                <IconImage size={20} iconName="arrowLeftWhite" />
              </MyTouchableOpacity>
              <View style={[styles.searchInput]}>
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
      <View style={styles.content}>{children}</View>
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
    backgroundColor: '#F5F5F5',
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
});
