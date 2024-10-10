/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import { View, Text, Image } from 'react-native'
import React from 'react'
import PrimaryCardItem from '../../../common/components/view/PrimaryCardItem'
import globalStyles from '../../../styles/global.style'
import styles from '../index.style';
import Typography from '../../../common/components/text/Typography';

const LastModifiedItem = () => {
  return (
    <PrimaryCardItem padding={0} layout='column'>
    <View style={globalStyles.flexRow}>
      <Image
        style={styles.image}
        source={require('../../../assets/image/modify.png')}
      />
      <View style={styles.modifyContent}>
        <View style={[globalStyles.flexRow, styles.modifiedItemTilte]}>
          <Typography textStyle={['SM', 'MD', 'PR']}>#4532</Typography>
          <Text>-</Text>
          <Typography textStyle={['SM', 'MD', 'PR']}>
            Nguyen Trong Qui
          </Typography>
        </View>
        <Typography textStyle={['XS', 'XS', 'BL']}>
          management {'>'} site {'>'} ab
        </Typography>
        <Typography style={styles.description}>
          Site ab edited: - built since: 10/03/2024 {'->'} 10/03/2024 00:00
          - showUploadDescription: undefined {'->'} false
        </Typography>
      </View>
    </View>
    <View style={[globalStyles.flexRow, styles.time]}>
      <Typography textStyle={['XS', 'SM', 'GR']}>
        2024-10-09 10:28:40
      </Typography>
      <Typography textStyle={['XS', 'SM', 'GR']}>UTC+07:00</Typography>
    </View>
  </PrimaryCardItem>
  )
}

export default LastModifiedItem