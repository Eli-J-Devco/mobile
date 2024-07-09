import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';

interface PrimaryFooterProps {
  okText?: string;
  cancleText?: string;
  onCanceled?: () => void;
  onOK?: () => void;
}

const PrimaryFooter = ({
  okText,
  cancleText,
  onCanceled,
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
      <TouchableOpacity style={styles.btnReset} activeOpacity={0.5}>
        <Text style={btnTextStyle}>{cancleText ? cancleText : 'Clear'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnApply} activeOpacity={0.5}>
        <Text style={btnTextStyle}>{okText ? okText : 'Apply'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryFooter;

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
