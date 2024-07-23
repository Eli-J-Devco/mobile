/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import IconImage from '../../common/components/icons/IconImage';

interface ICustomDrawerItemProps {
  label: string;
  iconName: IconNameType;
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
      icon={({focused, color, size}) => (
        <IconImage size={16} iconName={iconName} />
      )}
      style={{flex: 1}}
      labelStyle={{
        marginLeft: -25,
        fontSize: 14,
        padding: 0,
      }}
    />
  );
};

export default CustomDrawerItem;
