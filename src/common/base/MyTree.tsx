/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {View} from 'react-native';
import TreeItem from './components/TreeItem';

interface IMyTreeProps {
  data: ITree[];
  onChecked?: (checked: boolean, value?: any) => void;
}

const MyTree = ({data, onChecked}: IMyTreeProps) => {
  return (
    <View>
      {data.map(item => (
        <TreeItem
          key={item.id}
          treeItem={item}
          onChecked={(x, y) => {
            if (onChecked) {
              onChecked(x, y);
            }
          }}
        />
      ))}
    </View>
  );
};

export default MyTree;
