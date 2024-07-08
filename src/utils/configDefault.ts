export const textLight = {
  primary: '#000000',
  secondary: '#717171',
  title: '#FE8B40',
  white: '#FEFEFE',
  grayLight: '#C7C9D9',
  gray: '#BFBFBF',
  dark: '#1C1C28',
  yellow: '#FEDA00',
};

export const appThemeColor: AppThemeColor = {
  cornerRadius: 16,
  colors: {
    appPrimaryColors: {
      500: '#FF5329',
      400: '#FE8B40',
      300: '#FFA200',
      200: '#FFB800',
      100: 'rgba(251, 207, 178, 1)',
      50: '#FFF3EB',
    },
    appSecondaryColors: {
      500: '#FFD300',
      400: '#FFDC33',
      300: '#FFE566',
      200: '#FFED99',
      100: '#FFFBE6',
    },
    blue: {
      600: 'rgba(65, 117, 219, 1)',
      500: '#3B867D',
      400: '#2A99FF',
      300: '#76BCFD',
      200: '#A8CBC7',
      100: '#EFFFFD',
    },
    alert: {
      Success: '#0ABE75',
      Info: '#246BFD',
      Warning: '#FACC15',
      Error: '#F75555',
      Disabled: '#D8D8D8',
      DisabledButton: '#0E9E42',
    },
    greyScale: {
      900: '#212121',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9E9E9E',
      400: '#BDBDBD',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#F5F5F5',
      50: '#FAFAFA',
    },
    darkColor: {
      100: '#181A20',
      200: '#1F222A',
      300: '#35383F',
    },
    others: {
      white: '#FFFFFF',
      black: '#000000',
      red: '#F44336',
      pink: '#E91E63',
      purple: '#9C27B0',
      deepPurple: '#673AB7',
      indigo: '#3F51B5',
      blue: '#00C6FF',
      darkBlue: '#3B867D',
      cyan: '#00BCD4',
      teal: '#009688',
      green: '#4CAF50',
      lightGreen: '#8BC34A',
      lime: '#CDDC39',
      yellow: '#FFEB3B',
      amber: '#FFC107',
      orange: '#FF9800',
      deepOrange: '#FF5722',
      brow: '#795548',
      blueGrey: '#607D8B',
    },
    backgrounds: {
      green: '#F5FFF9',
      purple: '#F7ECFF',
      blue: '#F6FAFD',
      orange: '#FFF8ED',
      pink: '#FFF5F5',
      yellow: '#FFFEE0',
    },
    transparent: {
      green: '#06C149',
      yellow: '#FACC15',
      purple: '#9610FF',
      blue: '#335EF7',
      orange: '#FF9800',
      red: '#F75555',
      cyan: '#00BCD4',
    },
    transparentColor: 'transparent',
  },
};

export const buttonLight = {
  primary: '#FE8B40',
  disable: '#F2F2F2',
};

export const backgroundColor: Partial<ColorType> = {
  primary: '#FFFFFF',
  secondary: '#F1F1F1',
  dark: '#373433',
  yellow: '#FEDA00',
};

const themeDefaults = {
  palette: {
    text: textLight,
    button: buttonLight,
    background: backgroundColor,
    borderColor: {
      base: '#C7C9D9',
      secondary: 'rgba(164, 164, 164, 0.2)',
      tertiary: '#fff',
    },
    appThemeColor: appThemeColor,
  },
  borderRadius: {
    base: 6,
    circle: '50%',
    button: 8,
  },
  font: {
    size: {
      mini: 10,
      s: 12,
      xs: 14,
      sm: 16,
      xl: 18,
      xxl: 24,
      md: 28,
    },
    lineHeight: {
      xs: 21,
      sm: 24,
    },
    weight: {
      xs: '400',
      sm: '500',
      md: '700',
    },
  },
  layout: {
    height: {
      xs: 48,
      sm: 50,
    },
    width: {
      sm: 335,
    },
    padding: {
      xs: 12,
      sm: 18,
      md: 24,
    },
  },
};

export default themeDefaults;
