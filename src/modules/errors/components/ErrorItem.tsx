/* eslint-disable no-magic-numbers */
import React from 'react';
import {StyleSheet, Switch, Text, TextStyle, View} from 'react-native';
import MyCheckBoxText from '../../../common/base/MyCheckBoxText';
import IconButton from '../../../common/components/button/IconButton';
import Item from '../../../common/components/view/Item';
import PrimaryCardItem from '../../../common/components/view/PrimaryCardItem';
import useThemeContext from '../../../hooks/useThemeContext';
import {vw} from '../../../utils/responsive';
import DeleteError from './DeleteError';

const ErrorItem = () => {
  const theme = useThemeContext();

  const codeStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontWeight: '600',
    fontSize: theme.font.size.sm,
  };

  const devicesStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontWeight: '400',
    fontSize: theme.font.size.s,
  };

  const style700Text: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '700',
  };

  return (
    <PrimaryCardItem layout="column">
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={codeStyle}>#1001</Text>
          <Text style={devicesStyle}>-</Text>
          <Text style={devicesStyle}>KY Pulse Meter</Text>
        </View>
        <View style={styles.action}>
          <IconButton iconName="edit" size={20} />
          <DeleteError />
        </View>
      </View>
      <View>
        <Item lable="Message" value="Device has lost communication" />
        <Item lable="Error level" value="COMM" mode="dark" />
        <View style={styles.flex}>
          <Text style={style700Text}>Permission</Text>
          <View style={styles.permissiton}>
            <MyCheckBoxText>NW</MyCheckBoxText>
            <MyCheckBoxText>Client</MyCheckBoxText>
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={style700Text}>Status</Text>
          <View style={styles.permissiton}>
            <Switch style={styles.switch} />
          </View>
        </View>
      </View>
    </PrimaryCardItem>
  );
};

export default ErrorItem;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
    paddingVertical: 4,
  },
  permissiton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    maxWidth: vw(70),
  },
  switch: {
    transform: [{scaleX: 0.6}, {scaleY: 0.6}],
  },
});
