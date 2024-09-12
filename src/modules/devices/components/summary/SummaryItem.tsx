import React from 'react';
import {StyleSheet, View} from 'react-native';
import H2 from '../../../../common/components/text/H2';
import PrimaryCardItem from '../../../../common/components/view/PrimaryCardItem';
import SummaryStatus from './SummaryStatus';

interface ISummaryItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
}

const SummaryItem = ({item}: ISummaryItemProps) => {
  return (
    <PrimaryCardItem layout="column" gap={16} padding={16}>
      <View style={styles.header}>
        <H2>{item.Tilte}</H2>
      </View>
      <View style={styles.itemContainer}>
        <SummaryStatus color="#3AA0E1" title="Healthy Production" />
        <SummaryStatus color="#FFC146" title="Low Production" />
      </View>
      <View style={styles.roundedContainer}>
        <View style={[styles.rounded, styles.bg1]} />
      </View>
      <View style={styles.itemContainer}>
        <SummaryStatus color="#FF811C" title="No Production" />
        <SummaryStatus color="#EC3836" title="No Communication" />
      </View>
    </PrimaryCardItem>
  );
};

export default SummaryItem;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  roundedContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  rounded: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  bg1: {
    backgroundColor: '#3AA0E1',
  },
});
