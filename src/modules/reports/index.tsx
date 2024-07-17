import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonIcon from '../../common/components/button/ButtonIcon';
import IconButton from '../../common/components/button/IconButton';
import PrimaryCardItem from '../../common/components/view/PrimaryCardItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {reportsRouteNames} from '../../navigations/router-name';
import TimeAxis from '../../common/components/times/TimeAxis';
import ChartBar from '../../common/components/chart/ChartBar';

const Reports = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View>
      <PrimaryCardItem layout="column">
        <View style={[styles.action, styles.flex]}>
          <View style={[styles.flex, {gap: 8}]}>
            <IconButton size={20} iconName="download" />
            <IconButton
              size={20}
              iconName="setting"
              onPress={() => navigation.navigate(reportsRouteNames.ReportSetup)}
            />
          </View>
          <View style={[styles.flex, {gap: 8}]}>
            <ButtonIcon
              iconName="filter"
              text="Filter"
              touchableOpacityProps={{
                onPress: () =>
                  navigation.navigate(reportsRouteNames.ReportFilter),
              }}
              touchableOpacityStyles={{
                backgroundColor: 'transparent',
              }}
            />
            <IconButton
              iconName="more"
              size={24}
              onPress={() =>
                navigation.navigate(reportsRouteNames.AdditionalData)
              }
            />
          </View>
        </View>
        <TimeAxis />
        <ChartBar />
      </PrimaryCardItem>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
