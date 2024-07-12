import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext';
import SilderItem from './SilderItem';

interface Props {
  data: any[];
  navigation: any;
}

const Silder = ({data, navigation}: Props) => {
  const theme = useThemeContext();
  const [count, setCount] = useState(1);
  const [values, setValues] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      const countValue = Math.ceil(data.length / 5);
      //   console.log('----countValue', countValue);
      let team: any[] = [];
      Array.from({length: count}).map((_, index) => {
        team.push(data.slice(index * 5, (index + 1) * 5));
      });
      //   console.log('----team', team);
      setCount(countValue);
      setValues(team);
    }
  }, [data]);

  return (
    <View style={[styles.actionContainer]}>
      <View
        style={[
          styles.actionContent,
          {backgroundColor: theme.palette.background.primary},
        ]}>
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            flex: 90,
            paddingVertical: 8,
          }}
          renderItem={({item}: {item: any}) => <SilderItem items={item} />}
          data={values}
          keyExtractor={(item: any, index: number) => `id-silder-${item}`}
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
    // backgroundColor: 'blue',
    flex: 1,
  },
  actionContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue',
  },
  silderContainer: {
    width: '100%',
    flex: 10,
    paddingBottom: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  silder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    height: 5,
  },
  silderItem: {
    width: 20,
    height: '100%',
    backgroundColor: '#373433',
    borderRadius: 10,
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  actionIcon: {
    backgroundColor: '#E6EFFC',
    borderRadius: 8,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLable: {
    fontSize: 12,
    color: '#000000',
  },
});
