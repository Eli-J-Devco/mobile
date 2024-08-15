import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import IconImage from '../icons/IconImage';

interface IIconButtonProps {
  disabled?: boolean;
  iconName: IconNameType;
  onPress?: () => void;
  size?: number;
  touchableOpacityProps?: TouchableOpacityProps;
  style?: ViewStyle;
}

const IconButton = ({
  disabled = false,
  iconName,
  size,
  onPress,
  touchableOpacityProps,
  style,
}: IIconButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      style={style}
      onPress={() => {
        onPress && onPress();
      }}
      {...touchableOpacityProps}>
      <IconImage iconName={iconName} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;
