/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import Card from '../../../common/components/view/Card';
import Item from '../../../common/components/view/Item';
import useThemeContext from '../../../hooks/useThemeContext';
import styles from '../index.style';
import IconImage from '../../../common/components/icons/IconImage';

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

  const textStyle: TextStyle = {
    color: theme.palette.text.white,
    fontWeight: theme.font.weight.sm,
    fontSize: theme.font.size.xs,
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
          <Item lable="Last modified" value="13/01/2024" />
        </View>
      </Card>
      <Card tiltle="List Costumer" mode="dark">
        <View style={styles.customerNameContainer}>
          {Costumers.map(e => (
            <View
              key={e.Id}
              style={[
                styles.customerName,
                {backgroundColor: theme.palette.appThemeColor.colors.alert.Info},
              ]}>
                <IconImage iconName='customer' size={16} />
              <Text style={textStyle}>{e.Name}</Text>
            </View>
          ))}
        </View>
      </Card>
    </View>
  );
};

export default CustomerOrAccountDetail;
