/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import useThemeContext from '../../hooks/useThemeContext';
import MyTouchableOpacity from './MyTouchableOpacity';
import IconImage from '../components/icons/IconImage';

type CloseActionType =
  | {icon?: true; iconName: IconNameType; onPress: () => void}
  | {
      icon?: false | undefined;
      onPress?: null | undefined;
      iconName?: IconNameType;
    };

type MyTagPropsType = CloseActionType & {
  color?: OtherColorsKeyType;
  disabled?: boolean
  children: React.ReactNode;
};

const MyTag = ({
  color = 'blue',
  icon = false,
  iconName = 'close',
  onPress,
  disabled = false,
  children,
}: MyTagPropsType) => {
  const theme = useThemeContext();

  return (
    <MyTouchableOpacity
      touchableOpacityProps={{
        disabled
      }}
      onPress={() => {
        if (icon && onPress) onPress();
      }}
      touchableOpacityStyle={{
        ...styles.container,
        backgroundColor: theme.palette.appThemeColor.colors.otherLight[color],
        borderColor: theme.palette.appThemeColor.colors.others[color],
      }}>
      <Text
        style={[
          styles.text,
          {
            fontSize: theme.font.size.s,
            color: theme.palette.appThemeColor.colors.others[color],
          },
        ]}>
        {children}
      </Text>
      {icon && (
        <View style={styles.icon}>
          <IconImage iconName={iconName} size={12} />
        </View>
      )}
    </MyTouchableOpacity>
  );
};

export default MyTag;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: 4,
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    fontWeight: '600',
  },
  icon: {
    marginRight: -4,
  },
});
