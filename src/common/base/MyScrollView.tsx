/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';

interface IMyScrollViewProps {
  scrollViewProps?: ScrollViewProps;
  paddingHorizontal?: number;
  children: React.ReactNode;
}

const MyScrollView = (props: IMyScrollViewProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[
        styles.container,
        {
          paddingHorizontal:
            props.paddingHorizontal !== undefined
              ? props.paddingHorizontal
              : 16,
        },
      ]}
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
  },
});
