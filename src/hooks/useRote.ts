/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {
  ParamListBase,
  RouteProp,
  useRoute as hookRouter,
} from '@react-navigation/native';

export const useRoute = <T extends ParamListBase>(): RouteProp<T> => {
  const route = hookRouter<RouteProp<T>>();

  return route;
};
