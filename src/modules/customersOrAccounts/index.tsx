import React from 'react';
import { View } from 'react-native';
import IconButton from '../../common/components/button/IconButton';
import SearchInput from '../../common/components/input/SearchInput';
import useThemeContext from '../../hooks/useThemeContext';
import globalStyles from '../../styles/global.style';
import Item from './components/Item';
import styles from './index.style';

const CustomerOrAccount = () => {
  const theme = useThemeContext();

  return (
    <View>
      <View
        style={[
          styles.header,
          globalStyles.flexRowJusBeween,
          {
            backgroundColor: theme.palette.background.primary,
            borderBottomColor: theme.palette.borderColor.base,
          },
        ]}>
        <View style={[globalStyles.flexRow, styles.gap4]}>
          <IconButton
            iconName="filter"
            style={{
              ...styles.btn,
              borderColor: theme.palette.borderColor.base,
              ...globalStyles.flexRowCentent,
            }}
            size={20}
          />
          <SearchInput />
        </View>
        <IconButton
          iconName="upload"
          style={{
            ...styles.btn,
            borderColor: theme.palette.borderColor.base,
            ...globalStyles.flexRowCentent,
          }}
          size={18}
        />
      </View>
      <View style={[styles.contentContiner, globalStyles.flexColumn]}>
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  );
};

export default CustomerOrAccount;
