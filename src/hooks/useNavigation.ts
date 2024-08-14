/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {
  ParamListBase,
  useNavigation as useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useNavigation = <
  T extends ParamListBase,
>(): NativeStackNavigationProp<T> => {
  const navigation = useRoute() as NativeStackNavigationProp<T>;

  return navigation;
};
