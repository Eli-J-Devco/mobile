/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Text} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';

interface IH3Props {
  children: string;
}

const H3 = ({children}: IH3Props) => {
  const theme = useThemeContext();

  const styleText: any = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  return <Text style={styleText}>{children}</Text>;
};

export default H3;
