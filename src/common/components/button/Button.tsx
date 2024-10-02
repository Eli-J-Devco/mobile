import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';

interface ButonProps {
  touchableOpacityProps?: TouchableOpacityProps;
  textProps?: TextProps;
  textStyles?: TextStyle;
  touchableOpacityStyles?: ViewStyle;
  textSize?: number;
  onPress?: () => void;
  children: string
}

const Buton = ({
  touchableOpacityProps,
  textProps,
  textStyles,
  touchableOpacityStyles,
  textSize,
  onPress,
  children
}: ButonProps) => {
  const theme = useThemeContext();

  const btnTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: textSize ? textSize : theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <TouchableOpacity
      style={[styles.btn,{ backgroundColor: theme.palette.background.yellow }, touchableOpacityStyles]}
      activeOpacity={0.5}
      onPress={() => {
        requestAnimationFrame(() => {
          if (onPress) {
            onPress();
          }
        });
      }}
      {...touchableOpacityProps}>
      <Text style={[btnTextStyle, textStyles]} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Buton;

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
