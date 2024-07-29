/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';

interface IItemProps {
  mode?: 'light' | 'dark';
  lable: string;
  value?: string;
  paddingHorizontal?: number;
  backgroundColor?: string;
}

const Item = ({
  mode = 'light',
  lable,
  value,
  paddingHorizontal = 0,
  backgroundColor = 'transparent',
}: IItemProps) => {
  const theme = useThemeContext();

  const styleText: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
  };
  const style700Text: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '700',
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            mode === 'dark'
              ? backgroundColor !== 'transparent'
                ? backgroundColor
                : theme.palette.appThemeColor.colors.blue[50]
              : theme.palette.background.primary,
        },
        {paddingHorizontal},
      ]}>
      <Text style={style700Text}>{lable}</Text>
      <Text style={styleText}>{value}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 4,
  },
});
