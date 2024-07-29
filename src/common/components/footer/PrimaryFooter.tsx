import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import MyTouchableOpacity from '../../base/MyTouchableOpacity';

interface PrimaryFooterProps {
  okText?: string;
  cancleText?: string;
  onCancel?: () => void;
  onOK?: () => void;
}

const PrimaryFooter = ({
  okText,
  cancleText,
  onCancel,
  onOK,
}: PrimaryFooterProps) => {
  const theme = useThemeContext();

  const btnTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <View style={styles.actionWraped}>
      <MyTouchableOpacity
        touchableOpacityStyle={styles.btnReset}
        onPress={() => {
          if (onCancel) {
            onCancel();
          }
        }}>
        <Text style={btnTextStyle}>{cancleText ? cancleText : 'Clear'}</Text>
      </MyTouchableOpacity>
      <MyTouchableOpacity
        touchableOpacityStyle={styles.btnApply}
        onPress={() => {
          if (onOK) {
            onOK();
          }
        }}>
        <Text style={btnTextStyle}>{okText ? okText : 'Apply'}</Text>
      </MyTouchableOpacity>
    </View>
  );
};

export default PrimaryFooter;

const styles = StyleSheet.create({
  actionWraped: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DCDCDC',
    // position: 'absolute',
    // bottom: 0,
  },
  btnReset: {
    flex: 5,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8B8B8',
    borderRadius: 8,
  },
  btnApply: {
    flex: 5,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEDA00',
    borderRadius: 8,
  },
});
