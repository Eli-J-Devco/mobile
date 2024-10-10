/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import MyTag from '../../../common/base/MyTag';
import MyTouchableOpacity from '../../../common/base/MyTouchableOpacity';
import IconImage from '../../../common/components/icons/IconImage';
import Typography from '../../../common/components/text/Typography';
import Card from '../../../common/components/view/Card';
import Item from '../../../common/components/view/Item';
import useThemeContext from '../../../hooks/useThemeContext';
import styles from '../index.style';
import LastModifiedItem from './LastModifiedItem';
import {useNavigation} from '../../../hooks/useNavigation';

const Costumers: Array<{Id: number; Name: string}> = [
  {
    Id: 1,
    Name: 'Nguyen Trong Qui',
  },
  {
    Id: 4,
    Name: 'Qui',
  },
  {
    Id: 2,
    Name: 'Nguyen Trong ',
  },
  {
    Id: 5,
    Name: 'Nguyen Trong ',
  },
  {
    Id: 3,
    Name: 'Nguyen',
  },

  {
    Id: 6,
    Name: 'Nguyen',
  },
  {
    Id: 7,
    Name: 'Nguyen Trong ',
  },
  {
    Id: 8,
    Name: 'Nguyen',
  },
];

const CustomerOrAccountDetail = () => {
  const theme = useThemeContext();

  const navigation = useNavigation();

  const position = useRef(new Animated.Value(0)).current;

  const animation = Animated.loop(
    Animated.sequence([
      Animated.timing(position, {
        toValue: 15,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(position, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]),
  );

  useEffect(() => {
    animation.start();

    return () => animation.stop();
  }, []);

  const viewModifiedList = () => {
    navigation.navigate('LastModified');
  };

  return (
    <View style={styles.contentContinerDetail}>
      <Card tiltle="Information" mode="dark">
        <View style={styles.contentDetail}>
          <Item lable="Company" value="NextWave" />
          <Item lable="Site group" value="NW" />
          <Item lable="Commissioning" value="02/10/2024" />
          <Item
            lable="Time zone"
            value="(UTC-07:00) America/Denver, (US/Mountain)"
          />
          <Item lable="Data send time" value="1 Minute" />
          <Item lable="AC capacity" value="6,000 kW" />
          <Item lable="DC capacity" value="9,000 kW" />
          <Item lable="Built since" value="13/01/2024" />
          {/* <Item lable="Last modified" value="13/01/2024" /> */}
        </View>
      </Card>
      <Card tiltle="List Costumer" mode="dark">
        <View style={styles.customerNameContainer}>
          {Costumers.map(e => (
            <MyTag key={e.Id} disabled>
              <IconImage iconName="customer" size={16} />
              <Typography textStyle={['XS', 'SM', 'PR']}>{e.Name}</Typography>
            </MyTag>
          ))}
        </View>
      </Card>

      <View
        style={[
          styles.modified,
          {backgroundColor: theme.palette.background.dark},
        ]}>
        <Typography textStyle={['SM', 'MD', 'WH']}>Last modified</Typography>
        <MyTouchableOpacity
          touchableOpacityStyle={styles.modifiedTime}
          onPress={viewModifiedList}>
          <Typography textStyle={['OS', 'XS', 'WH']}>13/01/2024</Typography>
          <Animated.View
            style={[styles.icon, {transform: [{translateX: position}]}]}>
            <IconImage iconName="arrowsRightWhite" size={16} />
          </Animated.View>
        </MyTouchableOpacity>
      </View>
      <LastModifiedItem />
    </View>
  );
};

export default CustomerOrAccountDetail;
