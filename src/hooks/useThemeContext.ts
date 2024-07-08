/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useContext} from 'react';
import {ThemeContext} from '../context/AppThemeProvider';

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useThemeContext context must be use inside ThemeProvider');

  return context;
};

export default useThemeContext;
