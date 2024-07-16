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
import SummaryItem from './SummaryItem';

const Summary = () => {
  const theme = useThemeContext();

  const countText: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.xs,
    fontWeight: '700',
  };

  return (
    <View style={styles.container}>
      <SummaryItem item={{Tilte: 'PV SYSTEM INVERTER'}} />
      <SummaryItem item={{Tilte: 'PRODUCTION METER'}} />
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
