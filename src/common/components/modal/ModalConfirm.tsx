/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect} from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import MyTouchableOpacity from '../../base/MyTouchableOpacity';

interface IModalConfirmProps {
  visible: boolean;
  onCancel: () => void;
  title: string;
  onOk: () => void;
}

const ModalConfirm = ({visible, onCancel, title, onOk}: IModalConfirmProps) => {
  const theme = useThemeContext();

  const [modalVisible, setModalVisible] = React.useState(false);

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleOk = () => {
    if (onOk) {
      onOk();
    }
  };

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return (
    <Modal transparent visible={modalVisible}>
      <SafeAreaView style={[styles.modal]}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor={'rgba(0, 0, 0, 0.5)'}
        />
        <View
          style={[
            styles.content,
            {backgroundColor: theme.palette.background.primary},
          ]}>
          <View style={styles.titleSwapped}>
            <Text style={[styles.title, {color: theme.palette.text.primary}]}>
              Confirm
            </Text>
          </View>
          <Text
            style={{
              color: theme.palette.text.primary,
              fontSize: theme.font.size.xl,
              fontWeight: '400',
              marginTop: 10,
            }}>
            {title}
          </Text>
          <View style={styles.actionWraped}>
            <MyTouchableOpacity
              onPress={handleCancel}
              touchableOpacityStyle={{
                ...styles.actionItem,
                backgroundColor: theme.palette.background.disable,
              }}>
              <Text
                style={{
                  color: theme.palette.text.primary,
                  fontSize: theme.font.size.sm,
                  fontWeight: '400',
                }}>
                Cancel
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={handleOk}
              touchableOpacityStyle={{
                ...styles.actionItem,
                backgroundColor: theme.palette.background.dark,
              }}>
              <Text
                style={{
                  color: theme.palette.text.white,
                  fontSize: theme.font.size.sm,
                  fontWeight: '400',
                }}>
                Ok
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalConfirm;

const styles = StyleSheet.create({
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
    height: 150,
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingTop: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  titleSwapped: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  actionWraped: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 'auto',
  },
  actionItem: {
    flex: 1,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
