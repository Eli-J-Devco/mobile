/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PrimaryLayoutDetail from '../../../layouts/PrimaryLayoutDetail';
import SearchAndFilter from '../../../modules/dashboard/components/searchAndFilter';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useThemeContext from '../../../hooks/useThemeContext';
import IconImage from '../../../common/components/icons/IconImage';
import MyTouchableOpacity from '../../../common/base/MyTouchableOpacity';
import {images} from '../../../assets';
import MyScrollView from '../../../common/base/MyScrollView';

const SearchAndFilterSreen = () => {
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
        <ImageBackground
          resizeMode="cover"
          source={images.bgHeader}
          style={[styles.image, styles.header]}>
          <View
            style={[
              styles.headerContent,
              {marginTop: StatusBar.currentHeight},
            ]}>
            <View style={[styles.searchInput]}>
              <IconImage iconName="search" />
              <TextInput style={styles.input} placeholder="Search" />
            </View>

            <View style={styles.headerBtnContainer}>
              <MyTouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    fontSize: theme.font.size.sm,
                    color: theme.palette.text.primary,
                    fontWeight: '400',
                  }}>
                  Cancel
                </Text>
              </MyTouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <MyScrollView paddingHorizontal={0}>
            <SearchAndFilter />
          </MyScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SearchAndFilterSreen;

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
    flex: 14,
  },
  header: {
    flex: 2,
    backgroundColor: 'tranperant',
    width: '100%',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingVertical: 'auto',
    justifyContent: 'center',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    width: '100%',
    gap: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#E8E4E4',
    color: '#000',
    borderRadius: 20,
    paddingLeft: 8,
    height: 40,
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
