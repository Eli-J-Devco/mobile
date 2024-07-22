import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import {
  Button,
  Dimensions,
  Modal,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import {Text} from 'victory-native';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
    </View>
  );
}

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator screenOptions={{drawerPosition: 'left'}}>
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
};

const {width, height} = Dimensions.get('window');

function RightDrawerScreen() {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  return <View></View>;
}

export default function Menu() {
  return (
    <>
      <RightDrawerScreen />
    </>
  );
}
