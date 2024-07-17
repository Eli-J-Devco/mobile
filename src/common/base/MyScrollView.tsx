/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';

interface IMyScrollViewProps {
  scrollViewProps?: ScrollViewProps;
  children: React.ReactNode;
}

const MyScrollView = (props: IMyScrollViewProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      {...props.scrollViewProps}>
      {props.children}
    </ScrollView>
  );
};

export default MyScrollView;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
});
