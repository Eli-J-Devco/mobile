/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {StyleSheet, TextStyle} from 'react-native';

interface Reponse {
  [key: string]: TextStyle;
}

const textStyles = (theme: ThemeDefaultsType): Reponse => {
  return {
    SM_MD_PR: {
      fontSize: theme.font.size.sm,
      fontWeight: theme.font.weight.md,
      color: theme.palette.text.primary,
    },
  };
};

export default textStyles;

export const textStylesFlatten = (theme: ThemeDefaultsType) => {
  const textSize: Reponse = {
    OS: {
      fontSize: theme.font.size.s,
    },
    XS: {
      fontSize: theme.font.size.xs,
    },
    SM: {
      fontSize: theme.font.size.sm,
    },
  };

  const textWeight: Reponse = {
    XS: {
      fontWeight: theme.font.weight.xs,
    },
    SM: {
      fontWeight: theme.font.weight.sm,
    },
    MD: {
      fontWeight: theme.font.weight.md,
    },
  };

  const textColor: Reponse = {
    PR: {
      color: theme.palette.text.primary,
    },
    WH: {
      color: theme.palette.text.white,
    },
    YL: {
      color: theme.palette.text.yellow,
    },
    BL: {
      color: theme.palette.appThemeColor.colors.blue[400],
    },
    GR: {
      color: theme.palette.text.gray
    },

  };

  return (params: [TextSize, TextWeight, TextColor]): TextStyle => {
    return StyleSheet.flatten([
      textSize[params[0]],
      textWeight[params[1]],
      textColor[params[2]],
    ]);
  };
};
