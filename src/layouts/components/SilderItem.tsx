import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {WithLocalSvg} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  items: any[];
}

const SilderItem = ({items}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}>
      {items.map((item, index) => {
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
  actionContent: {
    paddingHorizontal: 8,
    shadowColor: '#333',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
    width: '100%',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  actionContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue',
  },
  silderContainer: {
    width: '100%',
    flex: 10,
    paddingBottom: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  silder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    height: 5,
  },
  silderItem: {
    width: 20,
    height: '100%',
    backgroundColor: '#373433',
    borderRadius: 10,
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
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
