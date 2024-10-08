/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';
import {PADDING_DEFAULT} from '../../constants/view/space';

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
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingHorizontal:
            props.paddingHorizontal !== undefined
              ? props.paddingHorizontal
              : PADDING_DEFAULT,
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
