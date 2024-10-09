import React, { useRef } from 'react';
import { Animated, StyleSheet, TextInput, View } from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import globalStyles from '../../../styles/global.style';
import IconImage from '../icons/IconImage';

const DEFAULT_WIDTH = 100;

const SearchInput = () => {
  const theme = useThemeContext();

  const widthAnim = useRef(new Animated.Value(DEFAULT_WIDTH)).current;

  const handleFocus = () => {
    Animated.timing(widthAnim, {
      toValue: 280,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(widthAnim, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      style={[
        globalStyles.flexRow,
        globalStyles.borderRadius8,
        {
          borderColor: theme.palette.borderColor.base,
          width: widthAnim,
          backgroundColor: theme.palette.background.primary,
        },
      ]}>
      <View
        style={[
          styles.searchIcon,
          globalStyles.flexRow,
          {backgroundColor: theme.palette.background.dark},
        ]}>
        <IconImage iconName="searchWhite" size={20} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Animated.View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    // minWidth: 48,
    height: 24,
    fontSize: 12,
    width: 'auto',
    backgroundColor: '#fff',
  },
  searchIcon: {
    height: 32,
    width: 30,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    justifyContent: 'center',
    marginRight: 4
  },
});
