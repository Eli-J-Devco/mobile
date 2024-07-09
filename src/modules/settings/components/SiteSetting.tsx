import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  Switch,
} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import {globalStyles} from '../../../styles';
import SelectLabel from '../../../common/components/select/SelectLabel';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';

const SiteSetting = () => {
  const theme = useThemeContext();

  const labelStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
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
          <Text style={labelStyle}>Date and Time</Text>
          <SelectLabel label="Time zone" />
          <SelectLabel label="Date format" />
          <SelectLabel label="Time format" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Switch
              style={
                {
                  // transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                }
              }
            />
            <Text>Apply for all sites</Text>
          </View>
        </View>
      </ScrollView>

      <PrimaryFooter cancleText="Reset to default" />
    </>
  );
};

export default SiteSetting;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  alertType: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  col1: {
    flex: 1,
  },
});
