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

interface ButonTextProps {
  touchableOpacityProps?: TouchableOpacityProps;
  textProps?: TextProps;
  textStyles?: TextStyle;
  touchableOpacityStyles?: ViewStyle;
  text: string;
  textSize?: number;
  onPress?: () => void;
}

const ButonText = ({
  touchableOpacityProps,
  textProps,
  textStyles,
  touchableOpacityStyles,
  text,
  textSize,
  onPress,
}: ButonTextProps) => {
  const theme = useThemeContext();

  const btnTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: textSize ? textSize : theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <TouchableOpacity
      style={[styles.btn, touchableOpacityStyles]}
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
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButonText;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
});
