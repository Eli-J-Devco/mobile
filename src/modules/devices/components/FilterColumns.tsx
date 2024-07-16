/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import ArrangeColumns from '../../../common/components/filters/ArrangeColumns';

const data: IArrangeColumns[] = [
  {
    title: 'ID',
    value: '1',
  },
  {
    title: 'Device Categorize',
    value: '2',
  },
  {
    title: 'Modbus',
    value: '3',
  },
  {
    title: 'Value',
    value: '4',
  },
  {
    title: 'Ranting AC Power',
    value: '5',
  },
  {
    title: 'Datalogger S/N',
    value: '6',
  },
  {
    title: 'Order ID',
    value: '7',
  },
  {
    title: 'Serial Number',
    value: '8',
  },
  {
    title: 'Last Updated',
    value: '9',
  },
];

const FilterColumns = () => {
  return <ArrangeColumns data={data} />;
};

export default FilterColumns;
