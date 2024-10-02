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
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View
} from 'react-native';
import { images } from '../../../assets';
import MyScrollView from '../../../common/base/MyScrollView';
import MyTouchableOpacity from '../../../common/base/MyTouchableOpacity';
import IconImage from '../../../common/components/icons/IconImage';
import useThemeContext from '../../../hooks/useThemeContext';
import SearchAndFilter from '../../../modules/dashboard/components/searchAndFilter';
import { useNavigation } from '../../../hooks/useNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchAndFilterSreen = () => {
  const navigation = useNavigation();
  const theme = useThemeContext();
  const insets = useSafeAreaInsets()

  const textStyles: TextStyle = {
    fontSize: theme.font.size.sm,
    color: theme.palette.text.primary,
    fontWeight: '400',
  };

  return (
    <View style={styles.container}>
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
              {marginTop: insets.top },
            ]}>
            <View style={styles.searchInput}>
              <IconImage iconName="search" />
              <TextInput style={styles.input} placeholder="Search" />
            </View>

            <View style={styles.headerBtnContainer}>
              <MyTouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={textStyles}>Cancel</Text>
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
    </View>
  );
};

export default SearchAndFilterSreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    flex: 14,
  },
  image: {
    flex: 1,
    opacity: 0.8,
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
});
