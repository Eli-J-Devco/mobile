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
import SvgIcon from '../SvgIcon';

interface ButtonIconProps {
  iconName: IconNameType;
  touchableOpacityProps?: TouchableOpacityProps;
  textProps?: TextProps;
  textStyles?: TextStyle;
  touchableOpacityStyles?: ViewStyle;
  text: string;
}

const ButtonIcon = ({
  iconName,
  touchableOpacityProps,
  textProps,
  textStyles,
  touchableOpacityStyles,
  text,
}: ButtonIconProps) => {
  const theme = useThemeContext();

  const btnTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };
  return (
    <TouchableOpacity
      style={[styles.btn, touchableOpacityStyles]}
      activeOpacity={0.5}
      {...touchableOpacityProps}>
      <SvgIcon w={16} h={16} iconName="plus" />
      <Text style={[btnTextStyle, textStyles]} {...textProps}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
});
