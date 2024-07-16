import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React from 'react';
import PrimaryCardItem from '../../../../common/components/view/PrimaryCardItem';
import H2 from '../../../../common/components/text/H2';
import useThemeContext from '../../../../hooks/useThemeContext';
import MyTouchableOpacity from '../../../../common/base/MyTouchableOpacity';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {devicesRouteNames} from '../../../../navigations/router-name';

interface ISummaryItemProps {
  item: any;
}

const SummaryItem = ({item}: ISummaryItemProps) => {
  const theme = useThemeContext();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const countText: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  return (
    <PrimaryCardItem layout="column" gap={16} padding={16}>
      <View style={styles.header}>
        <H2>{item.Tilte}</H2>
      </View>
      <View style={styles.itemContainer}>
        <MyTouchableOpacity
          onPress={() => navigation.navigate(devicesRouteNames.SummaryDetail)}
          touchableOpacityProps={{
            style: styles.item,
          }}>
          <Text
            style={[
              styles.count,
              {
                backgroundColor: '#3AA0E1',
              },
              countText,
            ]}>
            10
          </Text>
          <Text>Healthy Production</Text>
        </MyTouchableOpacity>
        <MyTouchableOpacity
          touchableOpacityProps={{
            style: styles.item,
          }}>
          <Text
            style={[
              styles.count,
              {
                backgroundColor: '#FFC146',
              },
              countText,
            ]}>
            0
          </Text>
          <Text>Low Production</Text>
        </MyTouchableOpacity>
      </View>
      <View style={styles.roundedContainer}>
        <View
          style={[
            styles.rounded,
            {
              backgroundColor: '#3AA0E1',
            },
          ]}
        />
      </View>
      <View style={styles.itemContainer}>
        <MyTouchableOpacity
          touchableOpacityProps={{
            style: styles.item,
          }}>
          <Text
            style={[
              styles.count,
              {
                backgroundColor: '#FF811C',
              },
              countText,
            ]}>
            0
          </Text>
          <Text>No Production</Text>
        </MyTouchableOpacity>
        <MyTouchableOpacity
          touchableOpacityProps={{
            style: styles.item,
          }}>
          <Text
            style={[
              styles.count,
              {
                backgroundColor: '#EC3836',
              },
              countText,
            ]}>
            0
          </Text>
          <Text>No Communication</Text>
        </MyTouchableOpacity>
      </View>
    </PrimaryCardItem>
  );
};

export default SummaryItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 16,
    padding: 8,
  },
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
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  count: {
    paddingHorizontal: 16,
    borderRadius: 50,
    paddingVertical: 8,
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
});
