import {View, Text, FlatList, FlatListProps} from 'react-native';
import React from 'react';

// const processProps = <T>(props: Props<T>): T => {
//     console.log(props.value);
//     return props.value;
// };

// type TMyFlastlist<T> = FlatListProps<T>

const MyFlastlist = (props: FlatListProps<any>) => {
  return <FlatList {...props} />;
};

export default MyFlastlist;
