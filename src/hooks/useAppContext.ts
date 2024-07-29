/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useContext} from 'react';
import {AppContext} from '../context/AppProvider';

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context)
    throw new Error('useContext context must be use inside AuthProvider');

  return context;
};

export default useAppContext;
