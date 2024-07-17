import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import ButonText from '../button/ButonText';
import useThemeContext from '../../../hooks/useThemeContext';

const TimeAxis = () => {
  const theme = useThemeContext();

  const textStyles: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
  };

  return (
    <View
      style={[
        styles.timeContainer,
        {backgroundColor: theme.palette.background.disable},
      ]}>
      <ButonText
        text="1 Minute"
        touchableOpacityStyles={{
          backgroundColor: 'trasparent',
          borderRadius: 0,
          borderRightColor: theme.palette.text.secondary,
          borderRightWidth: 0.5,
          padding: 0,
          paddingHorizontal: 4,
        }}
        textStyles={textStyles}
      />
      <ButonText
        text="5 Minute"
        touchableOpacityStyles={{
          backgroundColor: 'trasparent',
          borderRadius: 0,
          borderRightColor: theme.palette.text.secondary,
          borderRightWidth: 0.5,
          padding: 0,
          paddingHorizontal: 4,
        }}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Hour"
        touchableOpacityStyles={{
          backgroundColor: 'trasparent',
          borderRadius: 0,
          borderRightColor: theme.palette.text.secondary,
          borderRightWidth: 0.5,
          padding: 0,
          paddingHorizontal: 4,
        }}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Day"
        touchableOpacityStyles={{
          backgroundColor: 'trasparent',
          borderRadius: 0,
          borderRightColor: theme.palette.text.secondary,
          borderRightWidth: 0.5,
          padding: 0,
          paddingHorizontal: 4,
        }}
        textStyles={textStyles}
      />
      <ButonText
        text="7 Day"
        touchableOpacityStyles={{
          backgroundColor: 'trasparent',
          borderRadius: 0,
          borderRightColor: theme.palette.text.secondary,
          borderRightWidth: 0.5,
          padding: 0,
          paddingHorizontal: 4,
        }}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Month"
        touchableOpacityStyles={{
          backgroundColor: 'trasparent',
          borderRadius: 0,
          borderRightColor: theme.palette.text.secondary,
          borderRightWidth: 0.5,
          padding: 0,
          paddingHorizontal: 4,
        }}
        textStyles={textStyles}
      />
      <ButonText
        text="1 Year"
        touchableOpacityStyles={{
          backgroundColor: 'trasparent',
          borderRadius: 0,
          padding: 0,
          paddingHorizontal: 4,
        }}
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
