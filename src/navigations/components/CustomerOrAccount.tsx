import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MyTouchableOpacity from '../../common/base/MyTouchableOpacity';
import IconImage from '../../common/components/icons/IconImage';
import CustomDrawerItem from './CustomDrawerItem';
/* eslint-disable react-native/no-inline-styles */
const CustomerOrAccount = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.navItem}>
        <CustomDrawerItem
          onPress={() => setExpanded(!expanded)}
          label="Configuration"
          iconName="setting"
        />

        <MyTouchableOpacity
          touchableOpacityStyle={{
            ...styles.arrowIcon,
            right: expanded ? 13 : 16,
          }}>
          <IconImage
            size={expanded ? 20 : 16}
            iconName={expanded ? 'arrowUp' : 'arrowDown'}
          />
        </MyTouchableOpacity>
      </View>
      {expanded && (
        <View style={styles.itemContainer}>
          <CustomDrawerItem label="Customer/Account" />
          <CustomDrawerItem label="Permissions & Roles" />
          <CustomDrawerItem label="Site Groups" />
          <CustomDrawerItem label="Icons" />
          <CustomDrawerItem label="Error Level" />
          <CustomDrawerItem label="Errors" />
          <CustomDrawerItem label="Companies" />
          <CustomDrawerItem label="Import old data" />
          <CustomDrawerItem label="Device Type" />
          <CustomDrawerItem label="Hardware Devices" />
          <CustomDrawerItem label="Categorize Data" />
          <CustomDrawerItem label="Monitor" />
          <CustomDrawerItem label="System" />
        </View>
      )}
    </View>
  );
};

export default CustomerOrAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    paddingLeft: 16,
    flex: 1,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 4,
    position: 'relative',
  },
  arrowIcon: {
    position: 'absolute',
    top: '40%',
  },
});
