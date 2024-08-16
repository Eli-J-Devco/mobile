/* eslint-disable no-magic-numbers */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {Fragment} from 'react';
import IconImage from '../../common/components/icons/IconImage';
import {Animated, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {dashboardRouteNames} from '../../navigations/router-name';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '../../hooks/useNavigation';

interface IHeaderMainLayoutProps {
  animatedValue: Animated.Value;
}

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

const HeaderMainLayout = ({animatedValue}: IHeaderMainLayoutProps) => {
  const navigation = useNavigation();

  const animation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 15, 30, 50, 70, 100],
          outputRange: [0, -10, -20, -40, -60, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 15, 30, 50, 70, 100],
      outputRange: [1, 0.8, 0.6, 0.4, 0.2, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <Fragment>
      <TouchableOpacityAnimated
        activeOpacity={0.5}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
        style={[styles.headerBtn, styles.bgTransparent, animation]}>
        <IconImage size={28} iconName="navMenuWhite" />
      </TouchableOpacityAnimated>

      <TouchableOpacityAnimated
        activeOpacity={0.5}
        style={[styles.searchInput, animation]}
        onPress={() =>
          navigation.navigate(dashboardRouteNames.SearchAndFilter)
        }>
        <IconImage size={20} iconName="search" />
        <TextInput editable={false} style={styles.input} placeholder="Search" />
      </TouchableOpacityAnimated>

      <TouchableOpacityAnimated
        onPress={() => {
          navigation.navigate(dashboardRouteNames.Notify);
        }}
        style={[styles.headerBtn, animation]}>
        <IconImage size={20} iconName="bellWhite" />
      </TouchableOpacityAnimated>
      <TouchableOpacityAnimated style={[styles.headerBtn, animation]}>
        <IconImage size={20} iconName="user" />
      </TouchableOpacityAnimated>
    </Fragment>
  );
};

export default HeaderMainLayout;

const styles = StyleSheet.create({
  headerBtn: {
    height: 37,
    width: 37,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  bgTransparent: {backgroundColor: 'transparent'},
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
    textAlignVertical: 'center',
  },
});
