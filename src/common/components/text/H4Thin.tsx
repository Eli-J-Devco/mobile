/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {View, Text} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';

interface IH3ThinProps {
  children: string;
}

const H4Thin = ({children}: IH3ThinProps) => {
  const theme = useThemeContext();

  const styleText: any = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return <Text style={styleText}>{children}</Text>;
};

export default H4Thin;
