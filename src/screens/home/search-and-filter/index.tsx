/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet} from 'react-native';
import PrimaryLayoutDetail from '../../../layouts/PrimaryLayoutDetail';
import SearchAndFilter from '../../../modules/dashboard/components/searchAndFilter';

const SearchAndFilterSreen = () => {
  return (
    <PrimaryLayoutDetail>
      <SearchAndFilter />
    </PrimaryLayoutDetail>
  );
};

export default SearchAndFilterSreen;

const styles = StyleSheet.create({});
