/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {FlatList} from 'react-native';
import LastModifiedItem from './LastModifiedItem';
import styles from '../index.style';

const LastModified = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={new Array(10)}
      contentContainerStyle={styles.lastModifiedContainer}
      renderItem={() => <LastModifiedItem />}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default LastModified;
