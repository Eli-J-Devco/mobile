/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {Text, TextStyle} from 'react-native';
import MyTouchableOpacity from '../../../common/base/MyTouchableOpacity';
import IconImage from '../../../common/components/icons/IconImage';
import Swipeable from '../../../common/components/view/Swipeable';
import {useNavigation} from '../../../hooks/useNavigation';
import useThemeContext from '../../../hooks/useThemeContext';
import globalStyles from '../../../styles/global.style';
import styles from '../index.style';

const Item = () => {
  const theme = useThemeContext();
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);

  const textStyle: TextStyle = {
    fontSize: theme.font.size.s,
    fontWeight: '600',
    color: theme.palette.text.white,
    flexWrap: 'nowrap',
  };

  const nameStyle: TextStyle = {
    fontSize: theme.font.size.xs,
    fontWeight: '600',
    color: theme.palette.text.primary,
  };

  const viewDetail = () => {
    if (!isOpen) navigation.navigate('CustomerOrAccountDetail');
  };

  return (
    <Swipeable
      rightThreshold={200}
      layout="column"
      padding={10}
      onSwipeableOpen={() => {
        setIsOpen(true);
      }}
      onSwipeableClose={() => {
        setIsOpen(false);
      }}
      renderRightAction={close => (
        <>
          <MyTouchableOpacity
            onPress={close}
            touchableOpacityStyle={{
              ...styles.actionItem,
              backgroundColor: theme.palette.appThemeColor.colors.alert.Success,
            }}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              <IconImage iconName="plusWhite" size={16} />
            </Text>
            <Text style={textStyle} numberOfLines={1} ellipsizeMode="clip">
              Add
            </Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.actionItem,
              backgroundColor: theme.palette.appThemeColor.colors.alert.Warning,
            }}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              <IconImage iconName="editWhite" size={16} />
            </Text>
            <Text style={textStyle} numberOfLines={1} ellipsizeMode="clip">
              Edit
            </Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.actionItem,
              backgroundColor: theme.palette.appThemeColor.colors.alert.Info,
            }}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              <IconImage iconName="eyeWhite" size={16} />
            </Text>
            <Text style={textStyle} numberOfLines={1} ellipsizeMode="clip">
              View
            </Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.actionItem,
              backgroundColor: theme.palette.appThemeColor.colors.alert.Error,
            }}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              <IconImage iconName="trashWhite" size={18} />
            </Text>

            <Text style={textStyle} numberOfLines={1} ellipsizeMode="clip">
              Delete
            </Text>
          </MyTouchableOpacity>
        </>
      )}
      renderLeftAction={() => (
        <>
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.actionItem,
              backgroundColor: theme.palette.appThemeColor.colors.alert.Warning,
            }}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              <IconImage iconName="chartWhite" size={18} />
            </Text>

            <Text style={textStyle} numberOfLines={1} ellipsizeMode="clip">
              Chart
            </Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity
            touchableOpacityStyle={{
              ...styles.actionItem,
              backgroundColor: theme.palette.appThemeColor.colors.alert.Info,
            }}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              <IconImage iconName="emailWhite" size={20} />
            </Text>

            <Text style={textStyle} numberOfLines={1} ellipsizeMode="clip">
              Email
            </Text>
          </MyTouchableOpacity>
        </>
      )}>
      <MyTouchableOpacity
        touchableOpacityStyle={[globalStyles.flexRow, styles.title]}
        onPress={viewDetail}>
        <Text>#234</Text>
        <Text>-</Text>
        <Text style={[styles.name, nameStyle]}>
          (Testing)CO-06-0001 Alamosa Address: 8900, Lane 8 North, Hooper, CO,
          81136
        </Text>
      </MyTouchableOpacity>
    </Swipeable>
  );
};

export default Item;
