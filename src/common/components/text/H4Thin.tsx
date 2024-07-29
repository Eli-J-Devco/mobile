/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Text, TextStyle} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';

interface IH3ThinProps {
  children: string;
}

const H4Thin = ({children}: IH3ThinProps) => {
  const theme = useThemeContext();

  const styleText: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return <Text style={styleText}>{children}</Text>;
};

export default H4Thin;
