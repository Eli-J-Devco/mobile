/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';

interface ICardProps {
  tiltle?: string;
  mode?: 'light' | 'dark';
  children: React.ReactNode;
}

const Card = ({tiltle, mode = 'dark', children}: ICardProps) => {
  const theme = useThemeContext();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            backgroundColor:
              mode === 'light'
                ? theme.palette.background.primary
                : theme.palette.background.dark,
          },
        ]}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color:
              mode === 'light'
                ? theme.palette.text.primary
                : theme.palette.text.white,
            fontSize: theme.font.size.sm,
            fontWeight: '700',
          }}>
          {tiltle}
        </Text>
      </View>
      <View
        style={[
          styles.content,
          {backgroundColor: theme.palette.background.primary},
        ]}>
        {children}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',

    shadowColor: 'rgba(16, 24, 40, 0.3)',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 16,
    flexDirection: 'column',
  },
  header: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  content: {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
