/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import IconImage from '../../common/components/icons/IconImage';
import {StyleSheet} from 'react-native';
// import DrawerItem from '../../common/components/drawer/DrawerItem';

interface ICustomDrawerItemProps {
  label: string;
  iconName?: IconNameType;
  onPress?: () => void;
}

const CustomDrawerItem = ({
  label,
  iconName,
  onPress,
}: ICustomDrawerItemProps) => {
  return (
    <DrawerItem
      label={label}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      icon={() =>
        iconName ? <IconImage size={16} iconName={iconName} /> : <></>
      }
      style={styles.container}
      labelStyle={styles.labelStyle}
    />
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
  },
  labelStyle: {
    marginLeft: -25,
    fontSize: 14,
    padding: 0,
  },
});
