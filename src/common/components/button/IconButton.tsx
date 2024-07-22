import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import SvgIcon from '../SvgIcon';
import IconImage from '../icons/IconImage';

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
      <IconImage iconName={iconName} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;
