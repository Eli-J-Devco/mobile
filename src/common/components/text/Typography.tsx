/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, { useMemo } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import { textStylesFlatten } from '../../../styles/text.style';

interface ITypographyProps {
  textStyle?: [TextSize, TextWeight, TextColor]
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}
 
const Typography = ({textStyle = ['XS', 'XS', 'PR'], style, children}: ITypographyProps) => {
  const theme = useThemeContext();

  const textFatten = useMemo(() => textStylesFlatten(theme), [theme]);

  return <Text style={[textFatten(textStyle), style]}>{children}</Text>;
};

export default Typography;
