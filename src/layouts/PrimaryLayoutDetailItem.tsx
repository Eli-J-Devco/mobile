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
  Text,
  TextStyle,
} from 'react-native';
import {images} from '../assets';
import SvgIcon from '../common/components/SvgIcon';
import useThemeContext from '../hooks/useThemeContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
interface Props {
  title?: string;
  background?: string;
  children: React.ReactNode;
}

const PrimaryLayoutDetailItem = ({title, background, children}: Props) => {
  const theme = useThemeContext();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const textStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

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
            style={[styles.backBtn, {borderColor: theme.palette.text.white}]}
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <SvgIcon h={16} w={16} iconName="arrowLeftWhite" />
          </TouchableOpacity>
          <Text style={textStyle}>{title}</Text>
          <View />
        </View>
      </ImageBackground>
      <View
        style={[
          styles.content,
          {
            backgroundColor: background ? background : '#F5F5F5',
          },
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default PrimaryLayoutDetailItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.5,
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 12,
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
  backBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 1,
  },
});
