/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {ReactElement, createContext, useState} from 'react';
import themeDefaults from '../utils/configDefault';

interface AppThemeProviderProps {
  children: ReactElement;
}

export const ThemeContext = createContext<ThemeDefaultsType | null>(null);

const AppThemeProvider: React.FC<AppThemeProviderProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [theme] = useState<any>(themeDefaults);

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
