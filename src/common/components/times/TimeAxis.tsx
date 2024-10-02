import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import RadioButton from '../selection-controls/RadioButton';

const TimeAxis = () => {
  const theme = useThemeContext();

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
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: 0,
    paddingHorizontal: 4,
  };
  const touchableOpacityStartStyles: ViewStyle = {
    backgroundColor: 'trasparent',
    borderRadius: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    padding: 0,
    paddingHorizontal: 4,
    borderRightColor: theme.palette.text.secondary,
    borderRightWidth: 0.5,
  };

  return (
    <View
      style={[
        styles.timeContainer,
        {backgroundColor: theme.palette.background.disable},
      ]}>
      <RadioButton
        checked={false}
        value="1"
        touchableOpacityStyles={touchableOpacityStartStyles}
        textSize={theme.font.size.s}>
        1 Minute
      </RadioButton>
      <RadioButton
        checked={false}
        value="5"
        touchableOpacityStyles={touchableOpacityStyles}
        textSize={theme.font.size.s}>
        5 Minute
      </RadioButton>
      <RadioButton
        checked={false}
        value="1h"
        touchableOpacityStyles={touchableOpacityStyles}
        textSize={theme.font.size.s}>
        1 Hour
      </RadioButton>
      <RadioButton
        checked={true}
        value="1d"
        touchableOpacityStyles={touchableOpacityStyles}
        textSize={theme.font.size.s}>
        1 Day
      </RadioButton>
      <RadioButton
        checked={false}
        value="1d"
        touchableOpacityStyles={touchableOpacityStyles}
        textSize={theme.font.size.s}>
        7 Day
      </RadioButton>
      <RadioButton
        checked={false}
        value="1d"
        touchableOpacityStyles={touchableOpacityStyles}
        textSize={theme.font.size.s}>
        1 Month
      </RadioButton>
      <RadioButton
        checked={false}
        value="1d"
        touchableOpacityStyles={touchableOpacityEndStyles}
        textSize={theme.font.size.s}>
        1 Year
      </RadioButton>
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
