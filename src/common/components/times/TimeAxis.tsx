import React from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import ButonText from '../button/ButonText';

const TimeAxis = () => {
  const theme = useThemeContext();

  const textStyles: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
  };

  const touchableOpacityStyles: ViewStyle = {
    backgroundColor: 'trasparent',
    borderRadius: 0,
    borderRightColor: theme.palette.text.secondary,
    borderRightWidth: 0.5,
    padding: 0,
    paddingHorizontal: 4,
  };
  const touchableOpacityEndStyles: ViewStyle = {
    backgroundColor: 'trasparent',
    borderRadius: 0,
    padding: 0,
    paddingHorizontal: 4,
  };

  return (
    <View
      style={[
        styles.timeContainer,
        {backgroundColor: theme.palette.background.disable},
      ]}>
      <ButonText
        text="1 Minute"
        touchableOpacityStyles={touchableOpacityStyles}
        textStyles={textStyles}
      />
      <ButonText
        text="5 Minute"
        touchableOpacityStyles={touchableOpacityStyles}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Hour"
        touchableOpacityStyles={touchableOpacityStyles}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Day"
        touchableOpacityStyles={touchableOpacityStyles}
        textStyles={textStyles}
      />
      <ButonText
        text="7 Day"
        touchableOpacityStyles={touchableOpacityStyles}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Month"
        touchableOpacityStyles={touchableOpacityStyles}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Year"
        touchableOpacityStyles={touchableOpacityEndStyles}
        textStyles={textStyles}
      />
    </View>
  );
};

export default TimeAxis;

const styles = StyleSheet.create({
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    borderRadius: 30,
    padding: 4,
    justifyContent: 'space-between',
  },
});
