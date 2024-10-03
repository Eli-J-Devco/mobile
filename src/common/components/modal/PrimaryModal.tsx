/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import MyModal from '../../base/MyModal';
import MyTouchableOpacity from '../../base/MyTouchableOpacity';
import IconImage from '../icons/IconImage';

interface IPrimaryModalProps {
  footer?: boolean;
  position?: 'top' | 'center' | 'bottom';
  visible: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  children: React.ReactNode;
}

const PrimaryModal = ({
  footer = false,
  position = 'bottom',
  visible,
  onCancel,
  onOk,
  children,
}: IPrimaryModalProps) => {
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
    <MyModal visible={modalVisible}>
      <TouchableNativeFeedback
        onPressOut={() => {
          onCancel && onCancel();
        }}>
        <View style={[styles.modal, positionStyles[position]]}>
          <StatusBar
            translucent={true}
            barStyle="dark-content"
            backgroundColor={'rgba(0, 0, 0, 0.5)'}
          />
          <TouchableNativeFeedback>
            <View
              style={[
                contentStyles[position],
                {backgroundColor: theme.palette.background.primary},
              ]}>
              <MyTouchableOpacity
                touchableOpacityStyle={styles.closeIcon}
                onPress={() => {
                  onCancel && onCancel();
                }}>
                <IconImage iconName="close" size={20} />
              </MyTouchableOpacity>
              <View style={styles.content}>{children}</View>
              {footer && (
                <View style={styles.actionWraped}>
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
              )}
            </View>
          </TouchableNativeFeedback>
        </View>
      </TouchableNativeFeedback>
    </MyModal>
  );
};

export default PrimaryModal;

const positionStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  top: {
    justifyContent: 'flex-start',
  },

  // eslint-disable-next-line react-native/no-unused-styles
  center: {
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  // eslint-disable-next-line react-native/no-unused-styles
  bottom: {
    justifyContent: 'flex-end',
  },
});

const contentStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  top: {
    display: 'flex',
    minHeight: 150,
    width: '100%',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    alignItems: 'center',
  },

  // eslint-disable-next-line react-native/no-unused-styles
  center: {
    display: 'flex',
    minHeight: 150,
    width: '100%',
    alignItems: 'center',
    borderRadius: 16,
  },

  // eslint-disable-next-line react-native/no-unused-styles
  bottom: {
    display: 'flex',
    minHeight: 150,
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
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
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  content: {
    height: 'auto',
    width: '100%',
  },
});
