/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import IconImage from '../common/components/icons/IconImage';
import BottomNavigation from './BottomNavigation';
import CustomSidebarMenu from './components/CustomSidebarMenu';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomSidebarMenu {...props} />}
      initialRouteName="BottomNavigation"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#373433',
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 14,
        },
        drawerItemStyle: {
          marginVertical: -5,
          paddingVertical: 0,
        },
      }}>
      <Drawer.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused, size}) => (
            <IconImage size={20} iconName="home" />
          ),
          drawerItemStyle: {marginVertical: 0, paddingVertical: 0},
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 50,
  },
  headerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  logoImage: {
    width: 150,
    // height: 150,
    resizeMode: 'contain',
    marginTop: -20,
    marginLeft: 10,
  },
  imageContainer: {
    marginTop: -50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
