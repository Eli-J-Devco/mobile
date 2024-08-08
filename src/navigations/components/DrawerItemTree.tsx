/* eslint-disable no-magic-numbers */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MyTouchableOpacity from '../../common/base/MyTouchableOpacity';
import IconImage from '../../common/components/icons/IconImage';
import CustomDrawerItem from './CustomDrawerItem';
import {PORTFOLIO_DRAWER_NAV} from '../../constants/data/portfolio';

/* eslint-disable @typescript-eslint/no-explicit-any */
const ChildItem = ({item}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedChildren, setExpandedChildren] = useState(false);

  return (
    <>
      <View style={styles.children}>
        <View style={styles.navItem}>
          <CustomDrawerItem
            label={item.name}
            iconName="list"
            onPress={() => setExpanded(!expanded)}
          />
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.arrowIcon,
              right: expanded ? 13 : 16,
            }}>
            <IconImage
              size={expanded ? 20 : 16}
              iconName={expanded ? 'arrowUp' : 'arrowDown'}
            />
          </MyTouchableOpacity>
        </View>
        {expanded && (
          <>
            <View style={styles.children}>
              <View style={styles.navItem}>
                <CustomDrawerItem
                  label="PRS office Vietnam"
                  iconName="location"
                  onPress={() => setExpandedChildren(!expandedChildren)}
                />

                <MyTouchableOpacity
                  touchableOpacityStyle={{
                    ...styles.arrowIcon,
                    right: expandedChildren ? 13 : 16,
                  }}>
                  <IconImage
                    size={expandedChildren ? 20 : 16}
                    iconName={expandedChildren ? 'arrowUp' : 'arrowDown'}
                  />
                </MyTouchableOpacity>
              </View>
              {expandedChildren && (
                <View style={styles.children}>
                  <View style={styles.navItem}>
                    <CustomDrawerItem
                      label="IPC Datalogger"
                      iconName="service"
                    />
                  </View>
                  <View style={styles.navItem}>
                    <CustomDrawerItem
                      label="KLEA 200P Comsumption Meter"
                      iconName="service"
                    />
                  </View>
                  <View style={styles.navItem}>
                    <CustomDrawerItem label="KLEA 200P" iconName="service" />
                  </View>
                </View>
              )}
            </View>
          </>
        )}
      </View>
    </>
  );
};

const DrawerItemTree = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <View style={styles.navItem}>
        <CustomDrawerItem
          onPress={() => setExpanded(!expanded)}
          label="Portfolio"
          iconName="bag"
        />
        <MyTouchableOpacity
          touchableOpacityStyle={{
            ...styles.arrowIcon,
            right: expanded ? 13 : 16,
          }}>
          <IconImage
            size={expanded ? 20 : 16}
            iconName={expanded ? 'arrowUp' : 'arrowDown'}
          />
        </MyTouchableOpacity>
      </View>
      {expanded && (
        <>
          {PORTFOLIO_DRAWER_NAV.map(item => (
            <ChildItem key={item.id} item={item} />
          ))}
        </>
      )}
    </>
  );
};

export default DrawerItemTree;

const styles = StyleSheet.create({
  navItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 4,
    position: 'relative',
  },
  arrowIcon: {
    position: 'absolute',

    top: '40%',
  },
  children: {
    paddingLeft: 16,
  },
});
