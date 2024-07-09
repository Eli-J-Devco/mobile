/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import SvgIcon from '../components/SvgIcon';

export interface MySelectProps {
  value?: string | number;
  placeholder?: string;
  options?: ISelectOption[];
  onChange?: (value: string | number) => void;
  containerStyle?: ViewStyle;
}

const MySelect = ({
  value,
  options,
  placeholder,
  onChange,
  containerStyle,
}: MySelectProps) => {
  const theme = useThemeContext();

  const [currentValue, setCurrentValue] = React.useState<
    number | string | null
  >(null);

  const [modalVisible, setModalVisible] = React.useState(false);

  const onChangeValue = (value: string | number) => {
    if (onChange) {
      setCurrentValue(value);
      onChange(value);
    }
    setModalVisible(false);
  };

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

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
          <Text
            style={{
              color: theme.palette.text.primary,
              fontSize: theme.font.size.s,
              fontWeight: '400',
            }}>
            {options && options?.find(e => e.value === currentValue)?.label
              ? options?.find(e => e.value === currentValue)?.label
              : placeholder}
          </Text>
        </View>
        <View style={styles.icon}>
          <SvgIcon iconName="arrowDown" w={10} h={10} />
        </View>
      </TouchableOpacity>
      <Modal transparent visible={modalVisible}>
        <SafeAreaView style={[styles.modal]}>
          <StatusBar
            translucent={true}
            barStyle="dark-content"
            backgroundColor={'transparent'}
          />
          <View
            style={[
              styles.content,
              {backgroundColor: theme.palette.background.primary},
            ]}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <SvgIcon iconName="close" />
              </TouchableOpacity>
            </View>
            {options && (
              <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={options}
                renderItem={({
                  item,
                  index,
                }: {
                  item: ISelectOption;
                  index: number;
                }) => (
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
                        fontWeight: currentValue === item.value ? '700' : '400',
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
                keyExtractor={(item: ISelectOption) =>
                  `id-select-${item.value}`
                }
              />
            )}
          </View>
        </SafeAreaView>
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 16,
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
