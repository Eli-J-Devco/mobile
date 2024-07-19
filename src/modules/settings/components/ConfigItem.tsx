/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgIcon from '../../../common/components/SvgIcon';
import useThemeContext from '../../../hooks/useThemeContext';
import IconImage from '../../../common/components/icons/IconImage';

interface ConfigItemProps {
  iconName: IconNameType;
  title: string;
  onPress?: () => void;
}

const ConfigItem = ({iconName, title, onPress}: ConfigItemProps) => {
  const theme = useThemeContext();

  const handleOnPress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleOnPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        display: 'flex',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 8,
        }}>
        <IconImage iconName={iconName} size={18} />
        <Text
          style={{
            color: theme.palette.text.primary,
            fontSize: theme.font.size.xs,
          }}>
          {title}
        </Text>
      </View>
      <IconImage iconName="arrowRight" size={12} />
    </TouchableOpacity>
  );
};

export default ConfigItem;
