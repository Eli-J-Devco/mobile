import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';

interface ITextBetweenViewProps {
  leftText: string;
  rightText?: string;
  paddingHorizontal?: number;
  backgroundColor?: string;
  borderBottom?: boolean;
}

const TextBetweenView = ({
  leftText,
  rightText,
  paddingHorizontal = 0,
  backgroundColor = 'transparent',
  borderBottom = true,
}: ITextBetweenViewProps) => {
  const theme = useThemeContext();

  const styleText: any = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
  };

  const borderBottomStyle: ViewStyle = borderBottom
    ? {
        borderBottomWidth: 1,
        borderBottomColor: theme.palette.borderColor.secondary,
      }
    : {};
  return (
    <View
      style={[
        styles.container,
        borderBottomStyle,
        {paddingHorizontal, backgroundColor},
      ]}>
      <Text style={styleText}>{leftText}</Text>
      <Text style={styleText}>{rightText}</Text>
    </View>
  );
};

export default TextBetweenView;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 4,
  },
});
