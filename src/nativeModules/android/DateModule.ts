/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {NativeModules} from 'react-native';

const {DateModule} = NativeModules;

type GetDateCallback = (date: string) => void;

export const getCurrentDate = (callback: GetDateCallback): void => {
  DateModule.getCurrentDate(callback);
};
