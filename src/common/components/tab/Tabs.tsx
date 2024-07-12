import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButonText from '../button/ButonText';
import useThemeContext from '../../../hooks/useThemeContext';

interface ITabsProps {
  defaultActiveKey?: string | number;
  items: ITab[];
}

const Tabs = ({defaultActiveKey, items}: ITabsProps) => {
  const theme = useThemeContext();

  const [activeKey, setActiveKey] = useState<string | number | null>(null);

  useEffect(() => {
    if (defaultActiveKey) {
      setActiveKey(defaultActiveKey);
    } else {
      setActiveKey(items[0].key);
    }
  }, [defaultActiveKey]);

  return (
    <View style={styles.container}>
      <View style={styles.tabheader}>
        {items.map((item: ITab) => (
          <ButonText
            key={item.key}
            text={item.label}
            touchableOpacityStyles={{
              backgroundColor:
                activeKey === item.key
                  ? theme.palette.background.dark
                  : theme.palette.background.disable,
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 6,
            }}
            textStyles={{
              color:
                activeKey === item.key
                  ? theme.palette.text.yellow
                  : theme.palette.text.secondary,
              fontSize: theme.font.size.sm,
              fontWeight: '400',
            }}
            touchableOpacityProps={{
              onPress: () => setActiveKey(item.key),
            }}
          />
        ))}
      </View>
      <View style={styles.content}>
        {items.find((item: ITab) => item.key === activeKey)?.children}
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  tabheader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  content: {
    marginTop: 8,
    width: '100%',
    height: 'auto',
  },
});
