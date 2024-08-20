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
import {useNavigation} from '../../../hooks/useNavigation';
import {showNoti} from '../../../common/components/notify';

const SiteSetting = () => {
  const theme = useThemeContext();
  const navigation = useNavigation();

  const labelStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const onApply = () => {
    showNoti('success', 'Site Setting', 'Site Setting has been updated');
    navigation.goBack();
  };

  const onCancel = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View
          style={[
            globalStyles.view,
            styles.container,
            // eslint-disable-next-line react-native/no-inline-styles
            {backgroundColor: theme.palette.background.primary, marginTop: 16},
          ]}>
          <Text style={labelStyle}>Date and Time</Text>
          <SelectLabel label="Time zone" />
          <SelectLabel label="Date format" />
          <SelectLabel label="Time format" />
          <View style={styles.switchContainer}>
            <Switch />
            <Text>Apply for all sites</Text>
          </View>
        </View>
      </ScrollView>

      <PrimaryFooter
        cancleText="Reset to default"
        onOK={onApply}
        onCancel={onCancel}
      />
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
  contentContainerStyle: {
    paddingBottom: 16,
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
