/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, { useEffect } from 'react';
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View
} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import MyTouchableOpacity from '../../base/MyTouchableOpacity';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IModalConfirmProps {
  visible: boolean;
  onCancel: () => void;
  title: string;
  onOk: () => void;
}

const ModalConfirm = ({visible, onCancel, title, onOk}: IModalConfirmProps) => {
  const theme = useThemeContext();
  const insets = useSafeAreaInsets()

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

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xl,
    fontWeight: '400',
    marginVertical: 10,
  };

  const cancelTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '400',
  };
  const okTextStyle: TextStyle = {
    color: theme.palette.text.white,
    fontSize: theme.font.size.sm,
    fontWeight: '400',
  };

  return (
    <Modal transparent visible={modalVisible}>
      <View style={styles.modal}>
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
          <Text style={titleStyle}>{title}</Text>
          <View style={[styles.actionWraped, { paddingBottom: insets.bottom }]}>
            <MyTouchableOpacity
              onPress={handleCancel}
              touchableOpacityStyle={{
                ...styles.actionItem,
                backgroundColor: theme.palette.background.disable,
              }}>
              <Text style={cancelTextStyle}>Cancel</Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={handleOk}
              touchableOpacityStyle={{
                ...styles.actionItem,
                backgroundColor: theme.palette.background.dark,
              }}>
              <Text style={okTextStyle}>Ok</Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </View>
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
    height: 'auto',
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingVertical: 16,
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
