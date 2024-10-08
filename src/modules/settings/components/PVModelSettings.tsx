/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextStyle, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import SelectLabel from '../../../common/components/select/SelectLabel';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';
import {globalStyles} from '../../../styles';
import InputLabel from '../../../common/components/input/InputLabel';
import {useNavigation} from '@react-navigation/native';
import {showNoti} from '../../../common/components/notify';

const PVModelSettings = () => {
  const theme = useThemeContext();
  const navigation = useNavigation();

  const labelStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const onApply = () => {
    showNoti(
      'success',
      'PV Model Settings',
      'PV Model Settings has been updated',
    );
    navigation.goBack();
  };

  const onCancel = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <View
          style={[
            globalStyles.view,
            styles.container,
            {backgroundColor: theme.palette.background.primary, marginTop: 16},
          ]}>
          <Text style={labelStyle}>PV Method</Text>
          <SelectLabel label="Method" placeholder="- - -" />
        </View>
        <View
          style={[
            globalStyles.view,
            styles.container,
            {backgroundColor: theme.palette.background.primary, marginTop: 16},
          ]}>
          <Text style={labelStyle}>Setting</Text>
          <SelectLabel label="Method" placeholder="- - -" />
          <SelectLabel label="Panel Temperature" placeholder="- - -" />
          <InputLabel label="PV Module Temperature Coeff (%/°C)" />
          <InputLabel label="Inverter Efficiency (%)" />
          <InputLabel label="Cable Losses (%))" />
          <InputLabel label="Transformer Losses (%)" />
          <InputLabel label="Soiling (%)" />
          <InputLabel label="Other Losses (%)" />
          <InputLabel label="Global solar irradiance at STC (W/m²)" />
        </View>
      </ScrollView>

      <PrimaryFooter cancleText="Cancel" onOK={onApply} onCancel={onCancel} />
    </>
  );
};

export default PVModelSettings;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
});
