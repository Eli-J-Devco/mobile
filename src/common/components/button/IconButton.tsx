import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import SvgIcon from '../SvgIcon';

interface IIconButtonProps {
  iconName: IconNameType;
  onPress?: () => void;
  size?: number;
  touchableOpacityProps?: TouchableOpacityProps;
}

const IconButton = ({
  iconName,
  size,
  onPress,
  touchableOpacityProps,
}: IIconButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        onPress && onPress();
      }}
      {...touchableOpacityProps}>
      <SvgIcon iconName={iconName} w={size} h={size} />
    </TouchableOpacity>
  );
};

export default IconButton;
