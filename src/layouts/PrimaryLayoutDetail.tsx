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
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../assets';
import IconImage from '../common/components/icons/IconImage';
import { FLEX_CONTENT } from '../constants/view/flex';
import { useNavigation } from '../hooks/useNavigation';
import { flexV } from '../utils/responsive';

const { top, bottom } = flexV(FLEX_CONTENT.flex2, FLEX_CONTENT.flex14)

interface Props {
  filter?: boolean;
  children: React.ReactNode;
}

const PrimaryLayoutDetail = ({children}: Props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

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
        style={[styles.image, styles.header]}>
        <View
          style={[styles.headerContent, {marginTop: insets.top}]}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <IconImage iconName="arrowLeftWhite" />
          </TouchableOpacity>
          <View style={styles.searchInput}>
            <IconImage size={20} iconName="search" />
            <TextInput style={styles.input} placeholder="Search" />
          </View>

          <View style={styles.headerBtnContainer}>
            <TouchableOpacity activeOpacity={0.5} style={styles.headerBtn}>
              <IconImage size={20} iconName="bellWhite" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.headerBtn}>
              <IconImage size={20} iconName="user" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.content}>{children}</View>
    </View>
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
    flex: bottom
  },
  header: {
    flex: top,
    backgroundColor: 'tranperant',
    width: '100%',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 37,
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
