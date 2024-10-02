/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../assets';
import MyTouchableOpacity from '../common/base/MyTouchableOpacity';
import IconImage from '../common/components/icons/IconImage';
import { FLEX_CONTENT } from '../constants/view/flex';
import { useNavigation } from '../hooks/useNavigation';
import { flexV } from '../utils/responsive';

const { top, bottom } = flexV(FLEX_CONTENT.flex2, FLEX_CONTENT.flex14)


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
  const navigation = useNavigation();
  const insets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <ImageBackground
        resizeMode="cover"
        source={images.bgHeader}
        style={styles.header}>
        <View style={[styles.filterContainer, { paddingTop: insets.top }]}>
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
    </View>
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
    flex: bottom
  },
  header: {
    flex: top
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    gap: 8,
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
