/* eslint-disable react-native/no-inline-styles */
/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import SvgIcon from '../components/SvgIcon';
import IconImage from '../components/icons/IconImage';

export interface MySelectProps<T> {
  label?: string;
  value?: T;
  placeholder?: string;
  options?: Array<ISelectOption<T>>;
  onChange?: (value: T) => void;
  containerStyle?: ViewStyle;
}

const MySelect = <T extends string | number = number>({
  label,
  value,
  options,
  placeholder,
  onChange,
  containerStyle,
}: MySelectProps<T>) => {
  const theme = useThemeContext();

  const [currentValue, setCurrentValue] = useState<T>();

  const [modalVisible, setModalVisible] = useState(false);

  const onChangeValue = (value: T) => {
    if (onChange) {
      setCurrentValue(value);
      onChange(value);
    }
    // setModalVisible(false);
  };

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  const lableStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xl,
    fontWeight: '600',
    flexWrap: 'wrap',
    maxWidth: '80%',
    textAlign: 'center',
  };
  const valueStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.s,
    fontWeight: '400',
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.container, containerStyle]}
        onPress={() => {
          setModalVisible(true);
          // openBottomSheet();
        }}>
        <View style={styles.contentWraped}>
          <Text style={valueStyle}>
            {options && options?.find(e => e.value === currentValue)?.label
              ? options?.find(e => e.value === currentValue)?.label
              : placeholder}
          </Text>
        </View>
        <View style={styles.icon}>
          <IconImage iconName="arrowDown" size={14} />
        </View>
      </TouchableOpacity>
      <Modal transparent visible={modalVisible}>
        <TouchableNativeFeedback onPressOut={() => setModalVisible(false)}>
          <View style={styles.modal}>
            <StatusBar
              translucent={true}
              barStyle="dark-content"
              backgroundColor={'rgba(0, 0, 0, 0.5)'}
            />
            <TouchableNativeFeedback>
              <View
                style={[
                  styles.content,
                  {backgroundColor: theme.palette.background.primary},
                ]}>
                <View style={styles.header}>
                  <Text style={lableStyle}>{label}</Text>
                  <TouchableOpacity
                    style={{position: 'absolute', top: 8, right: 8}}
                    onPress={() => setModalVisible(false)}>
                    <IconImage iconName="close" />
                  </TouchableOpacity>
                </View>
                {options && (
                  <FlatList
                    contentContainerStyle={styles.contentContainerStyle}
                    data={options}
                    renderItem={({item}: {item: ISelectOption<T>}) => (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.option}
                        onPress={() => {
                          onChangeValue(item.value);
                        }}>
                        <Text
                          style={{
                            color: theme.palette.text.primary,
                            fontSize: theme.font.size.s,
                            fontWeight:
                              currentValue === item.value ? '700' : '400',
                          }}>
                          {item.label}
                        </Text>
                        <View style={styles.checkBoxContainer}>
                          {currentValue === item.value && (
                            <SvgIcon w={15} h={15} iconName="checkGreen" />
                          )}
                        </View>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item: ISelectOption<T>) =>
                      `id-select-${item.value}`
                    }
                  />
                )}
              </View>
            </TouchableNativeFeedback>
          </View>
        </TouchableNativeFeedback>
      </Modal>
    </>
  );
};

export default MySelect;

const styles = StyleSheet.create({
  container: {
    height: 37,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#C5C5C5',
    paddingLeft: 8,
    paddingVertical: 3,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 4,
  },
  contentWraped: {
    flex: 95,
  },
  icon: {
    flex: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  content: {
    display: 'flex',
    height: 'auto',
    minHeight: 200,
    maxHeight: 600,
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    marginBottom: 8,
  },
  option: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  checkBoxContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
