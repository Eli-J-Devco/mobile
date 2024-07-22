/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';

interface IMySwicthTextProps {
  scale?: number;
  textStyle?: TextStyle;
  span?: number;
  children: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}

const MySwicthText = ({
  scale = 0.8,
  value,
  span,
  textStyle,
  children,
  onValueChange,
}: IMySwicthTextProps) => {
  const theme = useThemeContext();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const text: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '400',
  };

  const gridStyle = span
    ? {
        flex: span,
      }
    : {};

  return (
    <TouchableOpacity
      style={[styles.container, gridStyle]}
      activeOpacity={0.5}
      onPress={() => {
        toggleSwitch();
        onValueChange && onValueChange(!isEnabled);
      }}>
      <Switch
        trackColor={{false: '#767577', true: theme.palette.background.dark}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{
          transform: [{scaleX: scale}, {scaleY: scale}],
          marginRight: -10,
        }}
      />
      <Text style={[text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MySwicthText;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
