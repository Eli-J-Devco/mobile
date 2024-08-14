/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconImage from '../../../common/components/icons/IconImage';
import useThemeContext from '../../../hooks/useThemeContext';

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
      style={styles.container}>
      <View style={styles.item}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    display: 'flex',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
});
