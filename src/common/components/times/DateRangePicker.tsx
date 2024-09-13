/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import { Platform } from 'react-native';
import MyAndroidDateRangePicker from '../../base/MyAndroidDateRangePicker';
import MyIosDateRangePicker from '../../base/MyIosDateRangePicker';

const DateRangePicker = () => {
  return (
    <>
      {Platform.OS === 'android' ? (
        <MyAndroidDateRangePicker />
      ) : (
        <MyIosDateRangePicker />
      )}
    </>
  );
};

export default DateRangePicker;
