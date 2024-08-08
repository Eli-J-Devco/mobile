/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import SilderItem from './SilderItem';

interface Props {
  data: any[];
  navigation: any;
}

const Silder = ({data}: Props) => {
  const theme = useThemeContext();
  const [count, setCount] = useState(1);
  const [values, setValues] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      const countValue = Math.ceil(data.length / 5);
      //   console.log('----countValue', countValue);
      const team: any[] = [];

      Array.from({length: count}).map((_, index) => {
        team.push(data.slice(index * 5, (index + 1) * 5));
      });
      //   console.log('----team', team);
      setCount(countValue);
      setValues(team);
    }
  }, [data]);

  return (
    <View style={styles.actionContainer}>
      <View
        style={[
          styles.actionContent,
          {backgroundColor: theme.palette.background.primary},
        ]}>
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}: {item: any}) => <SilderItem items={item} />}
          data={values}
          keyExtractor={(item: any) => `id-silder-${item}`}
        />

        {/* {count > 1 && (
          <View style={styles.silderContainer}>
            <View style={styles.silder}>
              {Array.from({length: count}).map((_, index) => (
                <TouchableOpacity
                  //   onPress={}
                  key={index}
                  style={styles.silderItem}
                />
              ))}
            </View>
          </View>
        )} */}
      </View>
    </View>
  );
};

export default Silder;

const styles = StyleSheet.create({
  actionContent: {
    paddingHorizontal: 8,
    shadowColor: '#333',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
    width: '100%',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  actionContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  contentContainerStyle: {
    flex: 90,
    paddingVertical: 8,
  },
});
