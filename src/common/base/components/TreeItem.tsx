/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../components/SvgIcon';
import MyCheckBoxText from './../MyCheckBoxText';
import IconImage from '../../components/icons/IconImage';

interface ChildItemProps {
  child: ITree;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChecked?: (checked: boolean, value?: any) => void;
}

const ChildItem = ({child}: ChildItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <View key={child.id} style={styles.childItem}>
        <MyCheckBoxText>{child.name}</MyCheckBoxText>
        {!!child.children && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setExpanded(!expanded);
            }}>
            <SvgIcon
              w={10}
              h={10}
              iconName={expanded ? 'arrowUp' : 'arrowDown'}
            />
          </TouchableOpacity>
        )}
      </View>
      {expanded && !!child.children && (
        <View style={styles.child}>{getChild(child)}</View>
      )}
    </>
  );
};

const getChild = (item: ITree) => {
  return item.children?.map(child => (
    <ChildItem key={child.id} child={child} />
  ));
};

interface TreeItemProps {
  treeItem: ITree;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChecked?: (checked: boolean, value?: any) => void;
}

const TreeItem = ({treeItem, onChecked}: TreeItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <View key={treeItem.id} style={styles.item}>
        <MyCheckBoxText
          value={treeItem.id}
          onChecked={(x, y) => {
            if (onChecked) {
              onChecked(x, y);
            }
          }}>
          {treeItem.name}
        </MyCheckBoxText>
        {!!treeItem.children && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setExpanded(!expanded)}>
            <IconImage
              size={expanded ? 18 : 15}
              iconName={expanded ? 'arrowUp' : 'arrowDown'}
            />
          </TouchableOpacity>
        )}
      </View>
      {expanded && !!treeItem.children && (
        <View style={styles.child}>{getChild(treeItem)}</View>
      )}
    </>
  );
};

export default TreeItem;

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 4,
  },
  child: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 16,
  },
  childItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 4,
  },
});

//   const [expandeds, setExpandeds] = useState<number[]>([]);

//   const getChild = (item: ITree) => {
//     return item.children?.map(child => (
//       <>
//         <View key={child.id} style={styles.childItem}>
//           <MyCheckBoxText>{child.name}</MyCheckBoxText>
//           {!!child.children && (
//             <TouchableOpacity
//               activeOpacity={0.5}
//               onPress={() => {
//                 if (expandeds.includes(child.id)) {
//                   setExpandeds(expandeds.filter(id => id !== child.id));
//                 } else {
//                   setExpandeds([...expandeds, child.id]);
//                 }
//               }}>
//               <SvgIcon
//                 w={12}
//                 h={12}
//                 iconName={
//                   expandeds.includes(child.id) ? 'arrowUp' : 'arrowDown'
//                 }
//               />
//             </TouchableOpacity>
//           )}
//         </View>

//         {expandeds.includes(child.id) && (
//           <View style={styles.child}>
//             {!!child.children && getChild(child)}
//           </View>
//         )}
//       </>
//     ));
//   };
