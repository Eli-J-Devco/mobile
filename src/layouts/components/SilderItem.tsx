import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {WithLocalSvg} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
}

const {width} = Dimensions.get('window');

const SilderItem = ({items}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      {items.map(item => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={item.name}
            style={styles.actionItem}
            onPress={() => {
              navigation.navigate(item.sreen);
            }}>
            <View style={styles.actionIcon}>
              <WithLocalSvg asset={item.icon} />
            </View>
            <Text style={styles.actionLable}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SilderItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: '100%',
    marginRight: 20,
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginRight: 20,
  },
  actionIcon: {
    backgroundColor: '#E6EFFC',
    borderRadius: 8,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLable: {
    fontSize: 12,
    color: '#000000',
  },
});
