/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

type ColorType = {
  primary: string;
  secondary: string;
  disable: string;
  dark: string;
  yellow: string;
  tertiary: string;
};

type TextLight = Partial<ColorType> & {
  title: string;
  white: string;
  grayLight: string;
  gray: string;
  dark: string;
  yellow: string;
};
type ButtonLight = Partial<ColorType>;

type BackgroundLight = Partial<ColorType>;

type SizeNumber = {
  mini: number;
  s: number;
  xs: number;
  sm: number;
  md: number;
  xl: number;
  xxl: number;
};

type FW =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

type SizeString = {
  xs: FW;
  sm: FW;
  md: FW;
};

type ThemeDefaultsType = {
  palette: {
    text: TextLight;
    button: ButtonLight;
    background: BackgroundLight;
    borderColor: {base: string; secondary: string; tertiary: string};
    appThemeColor: AppThemeColor;
  };
  borderRadius: {
    base: number;
    circle: string;
    button: number;
  };
  font: {
    size: Partial<SizeNumber>;
    lineHeight: Partial<SizeNumber>;
    weight: SizeString;
  };
  layout: {
    height: Partial<SizeNumber>;
    width: Partial<SizeNumber>;
    padding: Partial<SizeNumber>;
  };
};

type ColorRank = {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
};

type AppThemeColor = {
  cornerRadius: number;
  colors: {
    appPrimaryColors: Partial<ColorRank>;
    appSecondaryColors: Partial<ColorRank>;
    blue: Partial<ColorRank>;
    alert: {
      Success: string;
      Info: string;
      Warning: string;
      Error: string;
      Disabled: string;
      DisabledButton: string;
    };
    greyScale: Partial<ColorRank>;
    darkColor: Partial<ColorRank>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    others: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    backgrounds: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transparent: any;
    transparentColor: 'transparent';
  };
};
