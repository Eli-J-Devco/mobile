/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import useThemeContext from '../../../hooks/useThemeContext';
import ButonText from '../button/ButonText';

interface ITabsProps {
  defaultActiveKey?: string | number;
  items: ITab[];
  extra?: React.ReactNode;
}

const Tabs = ({defaultActiveKey, items, extra}: ITabsProps) => {
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
        <View style={styles.tabItems}>
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
        {extra && extra}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  tabItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  content: {
    marginTop: 8,
    width: '100%',
    height: 'auto',
  },
});
